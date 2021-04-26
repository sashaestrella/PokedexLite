
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';
import { HomeComponent } from '@app/home';
import { Pokemon } from '@app/_models';


@Component({ templateUrl: 'add-pokemon.component.html' })
export class AddPokemonComponent implements OnInit {
    form: FormGroup;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;
    pokemons = Pokemon.pokemons;

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

    saveData(){
      this.submitted = true;

      this.alertService.clear();

      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
          Pokemon.pokemons.push(this.form.value);
          this.router.navigate(['../'], { relativeTo: this.route });
      } else {
          Pokemon.pokemons.find(x => x.id == this.form.value.id);
          Pokemon.pokemons.push(this.form.value);
          this.router.navigate(['../'], { relativeTo: this.route });
      }
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
