import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeader } from './contentArea/header/app.header';
import { AppMusicHeader } from './music/musicHeader/app.musicHeader';
import { AppMusicNav } from './music/musicNav/app.musicNav';
import { AppCompSciHeader } from './compSci/compSciHeader/app.compSciHeader';
import { AppCompSciNav } from './compSci/compSciNav/app.compSciNav';
import { AppCompSciJavaProjects} from './compSci/javaProjects/app.compSci.javaProjects';
import { AppCompSciAndroidApp} from './compSci/androidApp/app.compSci.androidApp';
import { AppCompSciOpenSource } from './compSci/openSource/app.compSci.openSource';
import { AppCompSciRaspberryPi } from './compSci/raspberryPi/app.compSci.raspberryPi';
import { AppCompSciAlexaSkill} from './compSci/alexaSkill/app.compSci.alexaSkill';
import { AppCompSciKendrickLabs } from './compSci/kendrickLabs/app.compSci.kendrickLabs';
import { AppContent } from './contentArea/app.contentArea';
import { AppCompSci } from './compSci/app.compSci';
import { AppMusic } from './music/app.music';
import { AppContact } from './contact/app.contact';
import { AppFooter } from './footer/app.footer';

@NgModule({
    imports: [
        BrowserModule,

        RouterModule.forRoot([
            {
                path: '',
                component: AppContent
            },
            {
                path: 'compsci',
                component: AppCompSci 
            },
            {
                path:'java',
                component: AppCompSciJavaProjects
            },
            {
                path:'android',
                component: AppCompSciAndroidApp
            },
            {
                path:'openSource',
                component: AppCompSciOpenSource
            },
            {
                path:'pi',
                component: AppCompSciRaspberryPi
            },
            {
                path:'alexa',
                component: AppCompSciAlexaSkill
            },
            {
                path:'kendrick',
                component: AppCompSciKendrickLabs
            },
            {
                path: 'music',
                component: AppMusic
            },
            {
                path: 'contact',
                component: AppContact
            }
        ])
    ],
    declarations: [
        AppComponent,
        AppHeader,
        AppMusicHeader,
        AppMusicNav,
        AppCompSciHeader,
        AppCompSciNav,
        AppCompSciJavaProjects,
        AppCompSciAndroidApp,
        AppCompSciOpenSource,
        AppCompSciRaspberryPi,
        AppCompSciAlexaSkill,
        AppCompSciKendrickLabs,
        AppContent,
        AppCompSci,
        AppMusic,
        AppContact,
        AppFooter
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}