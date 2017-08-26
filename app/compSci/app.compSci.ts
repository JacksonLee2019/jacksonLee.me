import { Component } from '@angular/core';

import { AppCompSciNav } from './compSciNav/app.compSciNav';
import { AppCompSciHeader } from './compSciHeader/app.compSciHeader';
import { AppCompSciJavaProjects } from './javaProjects/app.compSci.javaProjects';
import { AppCompSciAlexaSkill } from './alexaSkill/app.compSci.alexaSkill';
import { AppCompSciAndroidApp } from './androidApp/app.compSci.androidApp';
import { AppCompSciKendrickLabs } from './kendrickLabs/app.compSci.kendrickLabs';
import { AppCompSciOpenSource } from './openSource/app.compSci.openSource';
import { AppCompSciRaspberryPi } from './raspberryPi/app.compSci.raspberryPi';

@Component({
    templateUrl: './app/compSci/app.compSci.html',
    styleUrls: ['./app/compSci/app.compSci.css']
})
        
export class AppCompSci {
    title: string = 'Programmer';
}