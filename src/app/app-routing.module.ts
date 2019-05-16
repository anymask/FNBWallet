import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login/create', loadChildren: './login/create-new-wallet/create-new-wallet.module#CreateNewWalletPageModule' },
  { path: 'login/import-backup', loadChildren: './login/import-wallet-mnemonic/import-wallet-mnemonic.module#ImportWalletMnemonicPageModule' },
  { path: 'login/open-file', loadChildren: './login/open-file/open-file.module#OpenFilePageModule' },
  { path: 'login/scan', loadChildren: './login/scan/scan.module#ScanPageModule' },
  { path: 'login/how-to-import', loadChildren: './login/help-mobile/help-mobile.module#HelpMobilePageModule' },
  { path: 'login/select-passphrase', loadChildren: './login/select-passphrase/select-passphrase.module#SelectPassphrasePageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'account/history', loadChildren: './transaction-history/transaction-history.module#TransactionHistoryPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }