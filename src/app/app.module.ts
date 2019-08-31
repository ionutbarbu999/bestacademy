import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LanguagesComponent } from './languages/languages.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { SummerCoursesComponent } from './summer-courses/summer-courses.component';
import { ContactComponent } from './contact/contact.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { MarketingComponent } from './home/marketing/marketing.component';
import { RecommandationsComponent } from './home/recommandations/recommandations.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { BenefitsComponent } from './home/benefits/benefits.component';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsHeroComponent } from './about-us/about-us-hero/about-us-hero.component';
import { IntroductionComponent } from './about-us/introduction/introduction.component';
import { ResourcesComponent } from './about-us/resources/resources.component';
import { EnglishWithAdeComponent } from './about-us/english-with-ade/english-with-ade.component';
import { LanguagesHeroComponent } from './languages/languages-hero/languages-hero.component';
import { LanguagesBarComponent } from './languages/languages-bar/languages-bar.component';
import { LanguagesListComponent } from './languages/languages-list/languages-list.component';
import { WorkshopsHeroComponent } from './workshops/workshops-hero/workshops-hero.component';
import { WorkshopsBarComponent } from './workshops/workshops-bar/workshops-bar.component';
import { WorkshopsListComponent } from './workshops/workshops-list/workshops-list.component';
import { SummerCoursesHeroComponent } from './summer-courses/summer-courses-hero/summer-courses-hero.component';
import { SummerCoursesBarComponent } from './summer-courses/summer-courses-bar/summer-courses-bar.component';
import { SummerCoursesListComponent } from './summer-courses/summer-courses-list/summer-courses-list.component';
import { SummerCoursesArticlesComponent } from './summer-courses/summer-courses-articles/summer-courses-articles.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutUsComponent,
    LanguagesComponent,
    WorkshopsComponent,
    SummerCoursesComponent,
    ContactComponent,
    PageErrorComponent,
    HomeComponent,
    HeroComponent,
    MarketingComponent,
    RecommandationsComponent,
    QualificationsComponent,
    BenefitsComponent,
    ContactFooterComponent,
    FooterComponent,
    AboutUsHeroComponent,
    IntroductionComponent,
    ResourcesComponent,
    EnglishWithAdeComponent,
    LanguagesHeroComponent,
    LanguagesBarComponent,
    LanguagesListComponent,
    WorkshopsHeroComponent,
    WorkshopsBarComponent,
    WorkshopsListComponent,
    SummerCoursesHeroComponent,
    SummerCoursesBarComponent,
    SummerCoursesListComponent,
    SummerCoursesArticlesComponent,
    ContactDetailsComponent,
    ContactFormComponent,
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
