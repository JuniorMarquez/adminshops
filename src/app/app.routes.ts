import {RouterModule,Routes} from '@angular/router';
import {
	AddtixsComponent,
	AdminComponent,
	MyTixsComponent,
	PrasitopbarComponent,
	PrasisliderComponent,
	PrasicategorycarouselComponent,
	PrasiproductcatalogComponent,
	PrasiinstagramfeedComponent,
	PrasitopfooterComponent,
	PrasifooterComponent,
	PrasiaboutoverlayComponent,
	PrasiconfirmationoverlayComponent,
	PrasicartoverlayComponent,
	PrasisearchoverlayComponent,
	PrasiproductdetailComponent,
	PrasicontactComponent,	
	PrasiaboutComponent,
	PrasidevolucionesComponent,
	PrasifilterComponent,
	PrasishopcartComponent,
	PrasidiscountComponent,
	TestappComponent,

	TopbarComponent,
	SliderComponent,
	ProductsComponent,
	FooterComponent,
	BlogComponent,
	HomeComponent,
	OrdersComponent,
	AccountComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:HomeComponent},

	{path:'topbar',component:TopbarComponent},
	{path:'slider',component:SliderComponent},
	{path:'products',component:ProductsComponent},
	{path:'footer',component:FooterComponent},
	{path:'blog',component:BlogComponent},
	// {path:'home',component:HomeComponent},
	{path:'orders',component:OrdersComponent},
	{path:'account',component:AccountComponent},

	{path:'admin',component:AdminComponent},
	{path:'addtixs',component:AddtixsComponent },
	{path:'mytixs',component:MyTixsComponent, canActivate:[AuthGuard]},
	{path:'prasitopbar',component:PrasitopbarComponent},
	{path:'prasislider',component:PrasisliderComponent},
	{path:'prasicategorycarousel',component:PrasicategorycarouselComponent},
	{path:'prasiproductcatalog',component:PrasiproductcatalogComponent},
	{path:'prasiinstagram',component:PrasiinstagramfeedComponent},
	{path:'prasitopfooter',component:PrasitopfooterComponent},
	{path:'prasifooter',component:PrasifooterComponent},
	{path:'prasiaboutoverlay',component:PrasiaboutoverlayComponent},
	{path:'prasiconfirmationoverlay',component:PrasiconfirmationoverlayComponent},
	{path:'prasicartoverlay',component:PrasicartoverlayComponent},
	{path:'prasisearchoverlay',component:PrasisearchoverlayComponent},
	{path:'prasiproductdetail/:id',component:PrasiproductdetailComponent},
	{path:'prasicontact',component:PrasicontactComponent},
	{path:'prasiabout',component:PrasiaboutComponent},
	{path:'prasidevoluciones',component:PrasidevolucionesComponent},
	{path:'prasifilter/:category',component:PrasifilterComponent},
	{path:'prasishopcart',component:PrasishopcartComponent},
	{path:'prasidiscount',component:PrasidiscountComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

