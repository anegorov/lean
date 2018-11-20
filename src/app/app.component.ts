import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'АРМ оператора ОЕЕ';
  items: MenuItem[];
  page: string = '0';

  ngOnInit() {
    this.items = [
        {
            label: 'Панель управления',
            icon: 'pi pi-pw pi-home',
            command: () => {this.page = '0'}
        },
        {
            label: 'Эффективность',
            icon: 'pi pi-fw',
            items: [
                {label: 'Основной план', icon: 'pi pi-fw pi-file',command: () => {this.page = '1'}}
            ]
        },
        {
            label: 'События',
            icon: 'pi pi-fw',
            items: [
                {
                    label: 'Регистрация',
                    icon: 'pi pi-pi pi-bars',
                    command: () => {this.page = '2'}
                },
                {
                    label: 'Результат', 
                    icon: 'pi pi-pi pi-search', 
                    command: () => {this.page = '3'}
                }
            ]
        },
        {
            label: 'Визуализ',
            icon: 'pi pi-fw pi-star-o',
            command: () => {this.page = '4'}
        }
    ];
}

}
