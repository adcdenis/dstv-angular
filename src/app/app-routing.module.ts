import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './dstv/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { GuardsGuard } from './dstv/core/guards.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent, canActivate: [GuardsGuard],
                children: [

                    { path: 'dashboard', loadChildren: () => import('./dstv/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'cliente', loadChildren: () => import('./dstv/components/pages/cliente/cliente.module').then(m => m.ClienteModule) },
                    { path: 'servidor', loadChildren: () => import('./dstv/components/pages/servidor/servidor.module').then(m => m.ServidorModule), canActivateChild: [GuardsGuard] },
                    { path: 'plano', loadChildren: () => import('./dstv/components/pages/plano/plano.module').then(m => m.PlanoModule) },
                    { path: 'mensagem', loadChildren: () => import('./dstv/components/pages/mensagem/mensagem.module').then(m => m.MensagemModule) },
                    { path: 'export', loadChildren: () => import('./dstv/components/pages/export/export.module').then(m => m.ExportModule) },
                    { path: 'relatorios', loadChildren: () => import('./dstv/components/pages/relatorios/relatorios.module').then(m => m.RelatoriosModule) },


                    { path: 'uikit', loadChildren: () => import('./dstv/components/uikit/uikit.module').then(m => m.UikitModule) },
                    { path: 'pages', loadChildren: () => import('./dstv/components/pages/pages.module').then(m => m.PagesModule) },
                ],
            },
            { path: 'auth', loadChildren: () => import('./dstv/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'pages/notfound', component: NotfoundComponent },
            { path: '**', redirectTo: 'pages/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]


})
export class AppRoutingModule {
}
