export default class Pokomen {
  /* privat adattagok */
  #nev = "";
  #kep = "";
  #mondat = "";
  constructor(nev, kep, mondat, szuloElem) {
    /* ez hívodik meg a példányositáskor
    beállítja az adattagokat 
    a this mindig az aktuális obejktumra mutatt */
    this.#nev = nev;
    this.#kep = kep;
    this.#mondat = mondat; /*privát */
    this.szuloElem = szuloElem; /* publikus */
    this.#megjelenit();
  }
  get nev() {
    return this.#nev;
  }

  set mondat(szoveg) {
    this.#mondat = szoveg;
  }

  beszel() {
    console.log(this.#mondat);
  }
  #htmlOsszeAlitt() {
    let txt = `
        <div class="poki">
            <h3>${this.#nev}</h3>
            <img src="${this.#kep}" alt="${this.#nev} pokemon">
        </div>
    `;
    return txt;
  }

  #megjelenit() {
    this.szuloElem.append(this.#htmlOsszeAlitt());
  }
}
