import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';


@Component({ templateUrl: 'add-pokemon.component.html' })
export class AddPokemonComponent implements OnInit {
    form: FormGroup;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;

        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            type: ['', Validators.required],
            lvl: ['', Validators.required],
        });
    }

    get f() { return this.form.controls; }

    onSubmit() {
      this.submitted = true;

      this.alertService.clear();

      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
          this.createAccount();
      } else {
          this.updateAccount();
      }
  }

  private createAccount() {
      this.accountService.create(this.form.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('Account created successfully', { keepAfterRouteChange: true });
                  this.router.navigate(['../'], { relativeTo: this.route });
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }

  private updateAccount() {
      this.accountService.update(this.id, this.form.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('Update successful', { keepAfterRouteChange: true });
                  this.router.navigate(['../../'], { relativeTo: this.route });
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }
}
