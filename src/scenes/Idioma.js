import { EN_US, ES_AR } from "./enums/languages.js";
import Button from "./button"
import { getLanguageConfig, getPhrase, getTranslations } from "./Services/translations.js";
export default class MenuPrincipal extends Phaser.Scene
{
	#language;
	constructor()
	{
        
		super('Idioma')
	}

    preload() {
        
		}

        create() { 
        let contexto=this;
        let lock=0;
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "FondoMenu").setScale(0.6);
        

        let botonjugar = new Button(this.cameras.main.centerX, this.cameras.main.centerY*1.25, "Español", this, () =>
        {
        if (lock==0){
        lock=1
        this.#language=ES_AR
        getTranslations(this.#language)
        setTimeout(function idioma1() {        
        contexto.scene.start('MenuPrincipal');}, 2000);}})

        let botonjugar2 = new Button(this.cameras.main.centerX, this.cameras.main.centerY*0.7, "English", this, () =>
        {
          if (lock==0){
        lock=1
        this.#language=EN_US
        getTranslations(this.#language)
        setTimeout(function idioma1() {        
        contexto.scene.start('MenuPrincipal');}, 2000);}})
         
    
      }

      /*async getTranslations(language){
		await getTranslations(language)
	}    */

}