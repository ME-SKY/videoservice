import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainModule} from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollbarDirective } from './core/directives/scrollbar.directive';
import { ScrollBarComponent } from './main/scroll-bar/scroll-bar/scroll-bar.component';
import {ScrollBarModule} from './main/scroll-bar/scroll-bar.module';
// import { NameFirstLetterPipe } from './core/pipes/name-first-letter.pipe';

// import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
// import { GoogleLoginProvider} from 'angularx-social-login';
// Create a new AuthServiceConfig object to set up OAuth2
// Use your Client ID in the GoogleLoginProvider()
// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
//   }
// ]);
// // Function to retrieve the AuthServiceConfig object
// export function provideConfig() {
//   return config;
// }

@NgModule({
  declarations: [
    AppComponent,
    // ScrollBarComponent,
    // NameFirstLetterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    BrowserAnimationsModule,
    // SocialLoginModule
  ],
  providers: [
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           'videoservice-301212'
    //         )
    //       }
    //     ]
    //   } as SocialAuthServiceConfig,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
