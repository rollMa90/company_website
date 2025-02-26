import { createWebHistory, createRouter } from "vue-router";
import Layout from "@/layout/index.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        name: "home",
        path: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        name: "about",
        path: "about",
        component: () => import("@/views/About.vue"),
      },
      {
        name: "joinus",
        path: "joinus",
        component: () => import("@/views/JoinUs.vue"),
      },
      {
        name: "vehicle",
        path: "vehicle",
        component: () => import("@/views/PersonalBusiness/Vehicle.vue"),
      },
      {
        name: "LegalAdvice",
        path: "LegalAdvice",
        component: () => import("@/views/PersonalBusiness/LegalAdvice.vue"),
      },
      {
        name: "BusinessRegistration",
        path: "BusinessRegistration",
        component: () =>
          import("@/views/EnterpriseBusiness/BusinessRegistration.vue"),
      },
      {
        name: "AccountingAndTaxation",
        path: "AccountingAndTaxation",
        component: () =>
          import("@/views/EnterpriseBusiness/AccountingAndTaxation.vue"),
      },
      {
        name: "LicenseApplication",
        path: "LicenseApplication",
        component: () =>
          import("@/views/EnterpriseBusiness/LicenseApplication.vue"),
      },
      {
        name: "ImportExportClearance",
        path: "ImportExportClearance",
        component: () =>
          import("@/views/EnterpriseBusiness/ImportExportClearance.vue"),
      },
      {
        name: "HumanResourcesService",
        path: "HumanResourcesService",
        component: () =>
          import("@/views/EnterpriseBusiness/HumanResourcesService.vue"),
      },
      {
        name: "ShippingServices",
        path: "ShippingServices",
        component: () =>
          import("@/views/PersonalBusiness/ShippingServices.vue"),
      },
      {
        name: "OtherServices",
        path: "OtherServices",
        component: () =>
          import("@/views/PersonalBusiness/OtherServices.vue"),
      },
      { path: "404", component: NotFound },
      { path: "/:pathMatch(.*)*", redirect: "/404" },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
