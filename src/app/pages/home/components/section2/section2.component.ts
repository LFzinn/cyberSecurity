import { Component } from '@angular/core';
import { SectionModel } from 'src/app/shared/components/header/models/section';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class section2Component {
  image1 = '../../../../../assets/icons/icons8-esqueci-a-senha-48.png'
  image2 = '../../../../../assets/icons/icons8-escudo-com-fechadura-48.png'
  image3 = '../../../../../assets/icons/icons8-código-pin-ok-48.png'


  groups: SectionModel[] = [
    {icon: this.image1, alt : 'imagem de cadeado generico', title: 'HIPAA Compliance Services', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi atque maiores rerum ipsa dolorum deserunteaque, rem molestiae illum qui.', url : ''},
    {icon: this.image2, alt : 'imagem de escudo com fechadura generico', title: 'SOC 2 Compliance Services', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi atque maiores rerum ipsa dolorum deserunteaque, rem molestiae illum qui.', url : ''},
    {icon: this.image3, alt : 'imagem de balão de mensagem generico', title: 'CMMC Compliance Services', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi atque maiores rerum ipsa dolorum deserunteaque, rem molestiae illum qui.', url : ''},
  ]
}
