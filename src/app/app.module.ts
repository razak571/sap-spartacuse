import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BaseStorefrontModule } from '@spartacus/storefront';
import { AuthGuard, CmsConfig, provideConfig } from '@spartacus/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@angular/router';

import { OAuthService } from 'angular-oauth2-oidc';
import { AuthModule } from '@spartacus/core';

import { MyFirstCmsComponent } from './custom/my-first-cms/my-first-cms.component';
import { MySecondComponent } from './custom/my-second/my-second.component';
import { MyProductListComponent } from './custom/my-product-list/my-product-list.component';
import { FreshProductListComponent } from './custom/fresh-product-list/fresh-product-list.component';
import { MockProductComponent } from './custom/mock-product/mock-product.component';
import { MockCartComponent } from './custom/mock-cart/mock-cart.component';
import { UserComponent } from './custom/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserReviewsComponent } from './custom/components/user-reviews/user-reviews.component';
import { BaseCardComponent } from './custom/components/base-card/base-card.component';
import { CustomeCardComponent } from './custom/components/custome-card/custome-card.component';
import { FormsModule } from '@angular/forms';
import { MyPracticeFeatureModule } from './custom/features/my-practice-feature/my-practice-feature.module';
import { AboutModule } from './custom/about-feature/about/about.module';
import { UserModule } from './custom/about-feature/about/pages/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCmsComponent,
    MySecondComponent,
    MyProductListComponent,
    FreshProductListComponent,
    MockProductComponent,
    MockCartComponent,
    UserComponent,
    UserReviewsComponent,
    BaseCardComponent,
    CustomeCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    AuthModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BaseStorefrontModule,
    FormsModule,
    MyPracticeFeatureModule,
    AboutModule,
    UserModule,
  ],
  providers: [
    OAuthService,

    // ✅ Base config (with OCC blanked out)
    provideConfig(<CmsConfig>{
      backend: {
        occ: {
          baseUrl: '', // Disable OCC calls
        },
      },
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['powertools-spa'],
      },
      i18n: {
        resources: {},
        chunks: {},
        fallbackLang: 'en',
      },
      features: {},
      cmsComponents: {
        CustomCMSFlexComponent: {
          component: MyFirstCmsComponent,
        },
        CustomSecondFlexComponent: {
          component: MySecondComponent,
        },
        ProductListComponent: {
          component: MyProductListComponent,
        },
        FreshProductListFlexComponent: {
          component: FreshProductListComponent,
        },
      },
      featureModules: {
        practiceFeature: {
          module: () =>
            import(
              '../app/custom/features/my-practice-feature/my-practice-feature.module'
            ).then((m) => m.MyPracticeFeatureModule),
          // Optionally protect route
          // guards: [AuthGuard]
        },

        userFeature: {
          module: () =>
            import(
              '../app/custom/about-feature/about/pages/user/user.module'
            ).then((m) => m.UserModule),
          // guards: [AuthGuard],
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
