import { Component, Input } from '@angular/core';
import { HousingLocation } from "../housing-location";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";



@Component({
    selector: 'app-housing-location',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
        <section class="listing">
        <img class="listing-photo" [src]="HousingLocation.photo" alt="Exterior photo of {{HousingLocation.name}}"/>
            <h2 class="listing-heading">{{HousingLocation.name}}</h2>
            <p class="listing-location">{{HousingLocation.city}}, {{HousingLocation.state}}</p>
            <a [routerLink]="['/details', HousingLocation.id]">Learn More</a>
        </section> 
    `,
    styleUrl: './housing-location.component.css'
})


export class HousingLocationComponent {
    @Input() HousingLocation!: HousingLocation;
}
