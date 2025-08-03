export class BannerHeadline extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <h1 style="font-size: 3rem;"><slot></slot></h1>
        `
    }
}