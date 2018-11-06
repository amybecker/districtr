import { html } from "lit-html";

export default class PlacesList {
    constructor(places, choosePlace) {
        this.places = places;
        this.choosePlace = choosePlace;
    }
    render() {
        return html`
        <section class="places-list-container">
        <h1>Where would you like to redistrict?</h1>
        <ul class="places-list">
            ${this.places.then(p =>
                p.map(
                    place =>
                        html`<li class="places-list__item"
                    @click=${() => this.choosePlace(place)}>
                    ${place.name}
                    </li>`
                )
            )}
        </ul>
        </section>
        `;
    }
}
