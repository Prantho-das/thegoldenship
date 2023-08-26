import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import AuthProvider from "../context/AuthProvider";
import AdminNavbar from "../components//admin/AdminNavbar";
import Sidebar from "../components//admin/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>thegoldenship.com</title>

        <link rel="canonical" href="https://1.envato.market/vuexy_admin" />

        <link
          rel="icon"
          type="image/x-icon"
          href="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/favicon/favicon.ico"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;ampdisplay=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="/admin/assets/vendor/fonts/fontawesome.css"
        />
        <link
          rel="stylesheet"
          href="/admin/assets/vendor/fonts/tabler-icons.css"
        />
        <link
          rel="stylesheet"
          href="/admin/assets/vendor/fonts/flag-icons.css"
        />

        <link
          rel="stylesheet"
          href="/admin/assets/vendor/css/rtl/core-dark.css"
          className="template-customizer-core-css"
        />
        <link
          rel="stylesheet"
          href="/admin/assets/vendor/css/rtl/theme-default-dark.css"
          className="template-customizer-theme-css"
        />
        <link rel="stylesheet" href="/admin/assets/css/demo.css" />

        <link
          rel="stylesheet"
          href="/admin/assets/vendor/libs/node-waves/node-waves.css"
        />
        <link
          rel="stylesheet"
          href="/admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
        />
        <link
          rel="stylesheet"
          href="/admin/assets/vendor/libs/typeahead-js/typeahead.css"
        />
        <link
          rel="stylesheet"
          href="/admin/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css"
        />
        <link
          rel="stylesheet"
          href="/admin/assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css"
        />
        <link
          rel="stylesheet"
          href="/admin/assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css"
        />
        <link
          rel="stylesheet"
          href="/admin/assets/vendor/libs/select2/select2.css"
        />
        <link
          rel="stylesheet"
          href="/admin/assets/vendor/libs/%40form-validation/umd/styles/index.min.css"
        />

        <Script src="/admin/assets/vendor/js/helpers.js"></Script>

        <Script src="/admin/assets/vendor/js/template-customizer.js"></Script>
        <Script src="/admin/assets/js/config.js"></Script>
      </head>
      <body className={inter.className}>
        <div className="layout-wrapper layout-content-navbar  ">
          <div className="layout-container">
            <Sidebar />
            <div className="layout-page">
              <AdminNavbar />
              <div className="content-wrapper">
                <AuthProvider>{children}</AuthProvider>
                <div className="content-backdrop fade"></div>
              </div>
              Sid
            </div>
          </div>
          <div className="layout-overlay layout-menu-toggle"></div>
          <div className="drag-target"></div>
        </div>
      </body>{" "}
      <Script src="/admin/assets/vendor/js/helpers.js"></Script>
      <Script src="/admin/assets/vendor/js/template-customizer.js"></Script>
      <Script src="/admin/assets/js/config.js"></Script>
      <Script src="/admin/assets/vendor/libs/jquery/jquery.js"></Script>
      <Script src="/admin/assets/vendor/libs/popper/popper.js"></Script>
      <Script src="/admin/assets/vendor/js/bootstrap.js"></Script>
      <Script src="/admin/assets/vendor/libs/node-waves/node-waves.js"></Script>
      <Script src="/admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></Script>
      <Script src="/admin/assets/vendor/libs/hammer/hammer.js"></Script>
      <Script src="/admin/assets/vendor/libs/i18n/i18n.js"></Script>
      <Script src="/admin/assets/vendor/libs/typeahead-js/typeahead.js"></Script>
      <Script src="/admin/assets/vendor/js/menu.js"></Script>
      <Script src="/admin/assets/vendor/libs/moment/moment.js"></Script>
      <Script src="/admin/assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js"></Script>
      <Script src="/admin/assets/vendor/libs/select2/select2.js"></Script>
      <Script src="/admin/assets/vendor/libs/%40form-validation/umd/bundle/popular.min.js"></Script>
      <Script src="/admin/assets/vendor/libs/%40form-validation/umd/plugin-bootstrap5/index.min.js"></Script>
      <Script src="/admin/assets/vendor/libs/%40form-validation/umd/plugin-auto-focus/index.min.js"></Script>
      <Script src="/admin/assets/vendor/libs/cleavejs/cleave.js"></Script>
      <Script src="/admin/assets/vendor/libs/cleavejs/cleave-phone.js"></Script>
      <Script src="/admin/assets/js/main.js"></Script>
      <Script src="/admin/assets/js/app-user-list.js"></Script>
    </html>
  );
}
