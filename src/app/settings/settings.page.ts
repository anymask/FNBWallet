import { Component, OnInit } from '@angular/core'
import { MetaverseService } from 'src/app/services/metaverse.service'
import { Platform } from '@ionic/angular'
import { LogoutService } from 'src/app/services/logout.service'
import { AppService } from 'src/app/services/app.service'
import { Router } from '@angular/router'
import { WalletService } from 'src/app/services/wallet.service'

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    connectcode: any
    network: string
    darkTheme = document.body.classList.contains('dark')

    constructor(
        private metaverseService: MetaverseService,
        public platform: Platform,
        private logoutService: LogoutService,
        private appService: AppService,
        private router: Router,
        private walletService: WalletService,
    ) { }

    async ngOnInit() {
        this.network = await this.appService.getNetwork()
        console.log('Settings page loaded')
        const addresses = await this.metaverseService.getAddresses()
        if (!Array.isArray(addresses) || !addresses.length) {
            this.router.navigate(['login'])
        }
    }

    async reset() {
        this.router.navigate(['/loading'], { state: { data: { reset: true } } })
    }

    // BaseCurrencyPage = () => this.nav.push("BaseCurrencyPage")

    // ExportWalletPage = e => this.nav.push("ExportWalletPage")

    // InformationPage = e => this.nav.push("InformationPage")

    logout() {
        this.logoutService.logout()
    }

    updateTheme() {
        this.darkTheme = !this.darkTheme
        if (this.darkTheme) {
            document.body.classList.add('dark')
            this.walletService.setTheme('dark')
        } else {
            document.body.classList.remove('dark')
            this.walletService.setTheme('light')
        }
    }

}
