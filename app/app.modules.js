System.register(['@angular/core', '@angular/platform-browser', '@angular/router', './app.component', './contentArea/header/app.header', './music/musicHeader/app.musicHeader', './music/musicNav/app.musicNav', './compSci/compSciHeader/app.compSciHeader', './compSci/compSciNav/app.compSciNav', './compSci/javaProjects/app.compSci.javaProjects', './compSci/androidApp/app.compSci.androidApp', './compSci/openSource/app.compSci.openSource', './compSci/raspberryPi/app.compSci.raspberryPi', './compSci/alexaSkill/app.compSci.alexaSkill', './compSci/kendrickLabs/app.compSci.kendrickLabs', './contentArea/app.contentArea', './compSci/app.compSci', './music/app.music', './contact/app.contact', './footer/app.footer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, router_1, app_component_1, app_header_1, app_musicHeader_1, app_musicNav_1, app_compSciHeader_1, app_compSciNav_1, app_compSci_javaProjects_1, app_compSci_androidApp_1, app_compSci_openSource_1, app_compSci_raspberryPi_1, app_compSci_alexaSkill_1, app_compSci_kendrickLabs_1, app_contentArea_1, app_compSci_1, app_music_1, app_contact_1, app_footer_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_header_1_1) {
                app_header_1 = app_header_1_1;
            },
            function (app_musicHeader_1_1) {
                app_musicHeader_1 = app_musicHeader_1_1;
            },
            function (app_musicNav_1_1) {
                app_musicNav_1 = app_musicNav_1_1;
            },
            function (app_compSciHeader_1_1) {
                app_compSciHeader_1 = app_compSciHeader_1_1;
            },
            function (app_compSciNav_1_1) {
                app_compSciNav_1 = app_compSciNav_1_1;
            },
            function (app_compSci_javaProjects_1_1) {
                app_compSci_javaProjects_1 = app_compSci_javaProjects_1_1;
            },
            function (app_compSci_androidApp_1_1) {
                app_compSci_androidApp_1 = app_compSci_androidApp_1_1;
            },
            function (app_compSci_openSource_1_1) {
                app_compSci_openSource_1 = app_compSci_openSource_1_1;
            },
            function (app_compSci_raspberryPi_1_1) {
                app_compSci_raspberryPi_1 = app_compSci_raspberryPi_1_1;
            },
            function (app_compSci_alexaSkill_1_1) {
                app_compSci_alexaSkill_1 = app_compSci_alexaSkill_1_1;
            },
            function (app_compSci_kendrickLabs_1_1) {
                app_compSci_kendrickLabs_1 = app_compSci_kendrickLabs_1_1;
            },
            function (app_contentArea_1_1) {
                app_contentArea_1 = app_contentArea_1_1;
            },
            function (app_compSci_1_1) {
                app_compSci_1 = app_compSci_1_1;
            },
            function (app_music_1_1) {
                app_music_1 = app_music_1_1;
            },
            function (app_contact_1_1) {
                app_contact_1 = app_contact_1_1;
            },
            function (app_footer_1_1) {
                app_footer_1 = app_footer_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            router_1.RouterModule.forRoot([
                                {
                                    path: '',
                                    component: app_contentArea_1.AppContent
                                },
                                {
                                    path: 'compsci',
                                    component: app_compSci_1.AppCompSci
                                },
                                {
                                    path: 'java',
                                    component: app_compSci_javaProjects_1.AppCompSciJavaProjects
                                },
                                {
                                    path: 'android',
                                    component: app_compSci_androidApp_1.AppCompSciAndroidApp
                                },
                                {
                                    path: 'openSource',
                                    component: app_compSci_openSource_1.AppCompSciOpenSource
                                },
                                {
                                    path: 'pi',
                                    component: app_compSci_raspberryPi_1.AppCompSciRaspberryPi
                                },
                                {
                                    path: 'alexa',
                                    component: app_compSci_alexaSkill_1.AppCompSciAlexaSkill
                                },
                                {
                                    path: 'kendrick',
                                    component: app_compSci_kendrickLabs_1.AppCompSciKendrickLabs
                                },
                                {
                                    path: 'music',
                                    component: app_music_1.AppMusic
                                },
                                {
                                    path: 'contact',
                                    component: app_contact_1.AppContact
                                }
                            ])
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            app_header_1.AppHeader,
                            app_musicHeader_1.AppMusicHeader,
                            app_musicNav_1.AppMusicNav,
                            app_compSciHeader_1.AppCompSciHeader,
                            app_compSciNav_1.AppCompSciNav,
                            app_compSci_javaProjects_1.AppCompSciJavaProjects,
                            app_compSci_androidApp_1.AppCompSciAndroidApp,
                            app_compSci_openSource_1.AppCompSciOpenSource,
                            app_compSci_raspberryPi_1.AppCompSciRaspberryPi,
                            app_compSci_alexaSkill_1.AppCompSciAlexaSkill,
                            app_compSci_kendrickLabs_1.AppCompSciKendrickLabs,
                            app_contentArea_1.AppContent,
                            app_compSci_1.AppCompSci,
                            app_music_1.AppMusic,
                            app_contact_1.AppContact,
                            app_footer_1.AppFooter
                        ],
                        bootstrap: [
                            app_component_1.AppComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.modules.js.map