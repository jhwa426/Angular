import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housing-location";
import { CommonModule } from "@angular/common";
import { HousingService } from "../housing.service";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HousingLocationComponent, CommonModule],
    template: `
        <section>
            <form>
                <input type="text" placeholder="Filter by city"/>
                <button class="primary">Search</button>
            </form>
        </section>
        
        <section class="results">
            <app-housing-location 
                *ngFor="let housingLocation of housingLocationList" 
                [HousingLocation]="housingLocation">
            </app-housing-location>
        </section>
    `,
    styleUrl: './home.component.css'
})


export class HomeComponent {
    housingLocationList: HousingLocation[] = [];

    housingService: HousingService = inject(HousingService);

    constructor() {
        this.housingLocationList = this.housingService.getAllHousingLocations();
    }
}

