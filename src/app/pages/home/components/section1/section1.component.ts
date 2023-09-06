import { Component } from '@angular/core';
import { SectionModel } from 'src/app/shared/components/header/models/section';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class section1Component {
  icon1 = '../../../../../assets/icons/olho.png'
  icon2 = '../../../../../assets/icons/senha.png'
  icon3 = '../../../../../assets/icons/atencao.png'
  icon4 = '../../../../../assets/icons/escudo.png'


cards: SectionModel[] = [
  { icon : this.icon1, title : 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: 'https://www.linkedin.com/in/lfsilvaferreira/', alt : 'icone de olho generico'},
  { icon : this.icon2, title : 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: 'https://www.linkedin.com/in/lfsilvaferreira/', alt : 'icone de cadeado generico'},
  { icon : this.icon3, title : 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: 'https://www.linkedin.com/in/lfsilvaferreira/', alt : 'icone de atenção generico'},
  { icon : this.icon4, title : 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: 'https://www.linkedin.com/in/lfsilvaferreira/', alt : 'icone de escudo generico'},
]


}
