import React from 'react'

export default function nav
() {
  return (
    <div>
        /**
* Template Name: Append
* Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/*--------------------------------------------------------------
# Font & Color Variables
# Help: https://bootstrapmade.com/color-system/
--------------------------------------------------------------*/
/* Fonts */
:root {
  --default-font: "Open Sans ",  system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --heading-font: "Montserrat",  sans-serif;
  --nav-font: "Poppins",  sans-serif;
}

/* Global Colors - The following color variables are used throughout the website. Updating them here will change the color scheme of the entire website */
:root { 
  --background-color: #ffffff; /* Background color for the entire website, including individual sections */
  --default-color: #212529; /* Default color used for the majority of the text content across the entire website */
  --heading-color: #32353a; /* Color for headings, subheadings and title throughout the website */
  --accent-color: #e84545; /* Accent color that represents your brand on the website. It's used for buttons, links, and other elements that need to stand out */
  --surface-color: #ffffff; /* The surface color is used as a background of boxed elements within sections, such as cards, icon boxes, or other elements that require a visual separation from the global background. */
  --contrast-color: #ffffff; /* Contrast color for text, ensuring readability against backgrounds of accent, heading, or default colors. */
}

/* Nav Menu Colors - The following color variables are used specifically for the navigation menu. They are separate from the global colors to allow for more customization options */
:root {
  --nav-color: #3a3939;  /* The default color of the main navmenu links */
  --nav-hover-color: #e84545; /* Applied to main navmenu links when they are hovered over or active */
  --nav-mobile-background-color: #ffffff; /* Used as the background color for mobile navigation menu */
  --nav-dropdown-background-color: #ffffff; /* Used as the background color for dropdown items that appear when hovering over primary navigation items */
  --nav-dropdown-color: #3a3939; /* Used for navigation links of the dropdown items in the navigation menu. */
  --nav-dropdown-hover-color: #e84545; /* Similar to --nav-hover-color, this color is applied to dropdown navigation links when they are hovered over. */
}

/* Color Presets - These classes override global colors when applied to any section or element, providing reuse of the sam color scheme. */

.light-background {
  --background-color: #f9f9f9;
  --surface-color: #ffffff;
}

.dark-background {
  --background-color: #060606;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  --surface-color: #252525;
  --contrast-color: #ffffff;
}

/* Smooth scroll */
:root {
  scroll-behavior: smooth;
}

/*--------------------------------------------------------------
# General Styling & Shared Classes
--------------------------------------------------------------*/
body {
  color: var(--default-color);
  background-color: var(--background-color);
  font-family: var(--default-font);
}

a {
  color: var(--accent-color);
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: color-mix(in srgb, var(--accent-color), transparent 25%);
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--heading-color);
  font-family: var(--heading-font);
}

/* PHP Email Form Messages
------------------------------*/
.php-email-form .error-message {
  display: none;
  background: #df1529;
  color: #ffffff;
  text-align: left;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}

.php-email-form .sent-message {
  display: none;
  color: #ffffff;
  background: #059652;
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}

.php-email-form .loading {
  display: none;
  background: var(--surface-color);
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
}

.php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid var(--accent-color);
  border-top-color: var(--surface-color);
  animation: php-email-form-loading 1s linear infinite;
}

@keyframes php-email-form-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Global Header
--------------------------------------------------------------*/
.header {
  color: var(--default-color);
  background-color: var(--background-color);
  padding: 20px 0;
  transition: all 0.5s;
  z-index: 997;
}

.header .logo {
  line-height: 1;
}

.header .logo img {
  max-height: 36px;
  margin-right: 8px;
}

.header .logo h1 {
  font-size: 24px;
  margin: 0;
  font-weight: 600;
  color: var(--heading-color);
}

.header .logo span {
  color: var(--accent-color);
  font-size: 24px;
  font-weight: 600;
  padding-left: 3px;
}

.header .btn-getstarted,
.header .btn-getstarted:focus {
  color: var(--contrast-color);
  background: var(--accent-color);
  font-size: 14px;
  padding: 8px 26px;
  margin: 0;
  border-radius: 4px;
  transition: 0.3s;
}

.header .btn-getstarted:hover,
.header .btn-getstarted:focus:hover {
  color: var(--contrast-color);
  background: color-mix(in srgb, var(--accent-color), transparent 15%);
}

@media (max-width: 1200px) {
  .header .logo {
    order: 1;
  }

  .header .btn-getstarted {
    order: 2;
    margin: 0 15px 0 0;
    padding: 6px 20px;
  }

  .header .navmenu {
    order: 3;
  }
}

.scrolled .header {
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.1);
}

/* Index Page Header
------------------------------*/
.index-page .header {
  --background-color: rgba(255, 255, 255, 0);
  --heading-color: #ffffff;
  --nav-color: rgba(255, 255, 255, 0.5);
  --nav-hover-color: #ffffff;
}

/* Index Page Header on Scroll
------------------------------*/
.index-page.scrolled .header {
  --background-color: #ffffff;
  --heading-color: #32353a;
  --nav-color: #3a3939;
  --nav-hover-color: #e84545;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Navmenu - Desktop */
@media (min-width: 1200px) {
  .navmenu {
    padding: 0;
  }

  .navmenu ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navmenu li {
    position: relative;
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-color);
    padding: 18px 15px;
    font-size: 16px;
    font-family: var(--nav-font);
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    transition: 0.3s;
  }

  .navmenu li:last-child a {
    padding-right: 0;
  }

  .navmenu li:hover>a,
  .navmenu .active,
  .navmenu .active:focus {
    color: var(--nav-hover-color);
  }

  .navmenu .dropdown ul {
    margin: 0;
    padding: 10px 0;
    background: var(--nav-dropdown-background-color);
    display: block;
    position: absolute;
    visibility: hidden;
    left: 14px;
    top: 130%;
    opacity: 0;
    transition: 0.3s;
    border-radius: 4px;
    z-index: 99;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  .navmenu .dropdown ul li {
    min-width: 200px;
  }

  .navmenu .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    color: var(--nav-dropdown-color);
  }

  .navmenu .dropdown ul a i {
    font-size: 12px;
  }

  .navmenu .dropdown ul a:hover,
  .navmenu .dropdown ul .active:hover,
  .navmenu .dropdown ul li:hover>a {
    color: var(--nav-dropdown-hover-color);
  }

  .navmenu .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navmenu .dropdown .dropdown ul {
    top: 0;
    left: -90%;
    visibility: hidden;
  }

  .navmenu .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: -100%;
    visibility: visible;
  }
}

/* Navmenu - Mobile */
@media (max-width: 1199px) {
  .mobile-nav-toggle {
    color: var(--nav-color);
    font-size: 28px;
    line-height: 0;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .navmenu {
    padding: 0;
    z-index: 9997;
  }

  .navmenu ul {
    display: none;
    list-style: none;
    position: absolute;
    inset: 60px 20px 20px 20px;
    padding: 10px 0;
    margin: 0;
    border-radius: 6px;
    background-color: var(--nav-mobile-background-color);
    overflow-y: auto;
    transition: 0.3s;
    z-index: 9998;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-dropdown-color);
    padding: 10px 20px;
    font-family: var(--nav-font);
    font-size: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.3s;
    background-color: color-mix(in srgb, var(--accent-color), transparent 90%);
  }

  .navmenu a i:hover,
  .navmenu a:focus i:hover {
    background-color: var(--accent-color);
    color: var(--contrast-color);
  }

  .navmenu a:hover,
  .navmenu .active,
  .navmenu .active:focus {
    color: var(--nav-dropdown-hover-color);
  }

  .navmenu .active i,
  .navmenu .active:focus i {
    background-color: var(--accent-color);
    color: var(--contrast-color);
    transform: rotate(180deg);
  }

  .navmenu .dropdown ul {
    position: static;
    display: none;
    z-index: 99;
    padding: 10px 0;
    margin: 10px 20px;
    background-color: var(--nav-dropdown-background-color);
    border: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
    box-shadow: none;
    transition: all 0.5s ease-in-out;
  }

  .navmenu .dropdown ul ul {
    background-color: rgba(33, 37, 41, 0.1);
  }

  .navmenu .dropdown>.dropdown-active {
    display: block;
    background-color: rgba(33, 37, 41, 0.03);
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active .mobile-nav-toggle {
    color: #fff;
    position: absolute;
    font-size: 32px;
    top: 15px;
    right: 15px;
    margin-right: 0;
    z-index: 9999;
  }

  .mobile-nav-active .navmenu {
    position: fixed;
    overflow: hidden;
    inset: 0;
    background: rgba(33, 37, 41, 0.8);
    transition: 0.3s;
  }

  .mobile-nav-active .navmenu>ul {
    display: block;
  }
}

/*--------------------------------------------------------------
# Global Footer
--------------------------------------------------------------*/
.footer {
  color: var(--default-color);
  background-color: var(--background-color);
  font-size: 14px;
  padding-bottom: 50px;
  position: relative;
}

.footer .footer-top {
  padding-top: 50px;
}

.footer .footer-about .logo {
  margin-bottom: 25px;
}

.footer .footer-about .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.footer .footer-about .logo span {
  color: var(--heading-color);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: var(--heading-font);
}

.footer .footer-about p {
  font-size: 14px;
  font-family: var(--heading-font);
}

.footer .social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 16px;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  margin-right: 10px;
  transition: 0.3s;
}

.footer .social-links a:hover {
  color: var(--accent-color);
  border-color: var(--accent-color);
}

.footer h4 {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 12px;
}

.footer .footer-links {
  margin-bottom: 30px;
}

.footer .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer .footer-links ul i {
  padding-right: 2px;
  font-size: 12px;
  line-height: 0;
}

.footer .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.footer .footer-links ul li:first-child {
  padding-top: 0;
}

.footer .footer-links ul a {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  display: inline-block;
  line-height: 1;
}

.footer .footer-links ul a:hover {
  color: var(--accent-color);
}

.footer .footer-contact p {
  margin-bottom: 5px;
}

.footer .copyright {
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: color-mix(in srgb, var(--default-color), transparent 95%);
}

.footer .copyright p {
  margin-bottom: 0;
}

.footer .credits {
  margin-top: 6px;
  font-size: 13px;
}

/*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
#preloader {
  position: fixed;
  inset: 0;
  z-index: 999999;
  overflow: hidden;
  background: var(--background-color);
  transition: all 0.6s ease-out;
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid #ffffff;
  border-color: var(--accent-color) transparent var(--accent-color) transparent;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: animate-preloader 1.5s linear infinite;
}

@keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Scroll Top Button
--------------------------------------------------------------*/
.scroll-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  background-color: var(--accent-color);
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}

.scroll-top i {
  font-size: 24px;
  color: var(--contrast-color);
  line-height: 0;
}

.scroll-top:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 20%);
  color: var(--contrast-color);
}

.scroll-top.active {
  visibility: visible;
  opacity: 1;
}

/*--------------------------------------------------------------
# Disable aos animation delay on mobile devices
--------------------------------------------------------------*/
@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}

/*--------------------------------------------------------------
# Global Page Titles & Breadcrumbs
--------------------------------------------------------------*/
.page-title {
  color: var(--default-color);
  background-color: var(--background-color);
  position: relative;
}

.page-title .heading {
  padding: 80px 0;
  border-top: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
}

.page-title .heading h1 {
  font-size: 38px;
  font-weight: 700;
}

.page-title nav {
  background-color: color-mix(in srgb, var(--default-color), transparent 95%);
  padding: 20px 0;
}

.page-title nav ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.page-title nav ol li+li {
  padding-left: 10px;
}

.page-title nav ol li+li::before {
  content: "/";
  display: inline-block;
  padding-right: 10px;
  color: color-mix(in srgb, var(--default-color), transparent 70%);
}

/*--------------------------------------------------------------
# Global Sections
--------------------------------------------------------------*/
section,
.section {
  color: var(--default-color);
  background-color: var(--background-color);
  padding: 60px 0;
  scroll-margin-top: 98px;
  overflow: clip;
}

@media (max-width: 1199px) {

  section,
  .section {
    scroll-margin-top: 64px;
  }
}

/*--------------------------------------------------------------
# Global Section Titles
--------------------------------------------------------------*/
.section-title {
  text-align: center;
  padding-bottom: 60px;
  position: relative;
}

.section-title h2 {
  font-size: 32px;
  font-weight: 700;
  position: relative;
}

.section-title h2:before,
.section-title h2:after {
  content: "";
  width: 50px;
  height: 2px;
  background: var(--accent-color);
  display: inline-block;
}

.section-title h2:before {
  margin: 0 15px 10px 0;
}

.section-title h2:after {
  margin: 0 0 10px 15px;
}

.section-title p {
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.hero {
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero:before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 50%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.hero .container {
  position: relative;
  z-index: 3;
}

.hero h2 {
  margin: 0;
  font-size: 44px;
  font-weight: 700;
}

.hero p {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  margin: 5px 0 0 0;
  font-size: 20px;
}

.hero .sign-up-form {
  margin-top: 20px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
  background: color-mix(in srgb, var(--default-color) 5%, white 90%);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
  display: flex;
}

.hero .sign-up-form input[type=email] {
  background-color: transparent;
  border: 0;
  padding: 4px 10px;
  width: 100%;
}

.hero .sign-up-form input[type=email]:focus-visible {
  outline: none;
}

.hero .sign-up-form input[type=submit] {
  border: 0;
  box-shadow: none;
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  padding: 8px 20px 10px 20px;
  border-radius: 7px;
  color: var(--contrast-color);
  transition: 0.3s;
}

.hero .sign-up-form input[type=submit]:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 10%);
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 32px;
  }

  .hero p {
    font-size: 18px;
  }
}

/*--------------------------------------------------------------
# Clients Section
--------------------------------------------------------------*/
.clients {
  padding: 20px 0;
}

.clients .client-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.clients .client-logo img {
  padding: 20px 40px;
  max-width: 90%;
  transition: 0.3s;
  opacity: 0.5;
  filter: grayscale(100);
}

.clients .client-logo img:hover {
  filter: none;
  opacity: 1;
}

@media (max-width: 640px) {
  .clients .client-logo img {
    padding: 20px;
  }
}

/*--------------------------------------------------------------
# About Section
--------------------------------------------------------------*/
.about .content h3 {
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  padding: 10px 20px;
  background: color-mix(in srgb, var(--accent-color), transparent 95%);
  color: var(--accent-color);
  border-radius: 7px;
  display: inline-block;
}

.about .content h2 {
  font-weight: 700;
}

.about .content p:last-child {
  margin-bottom: 0;
}

.about .content .read-more {
  background: var(--accent-color);
  color: var(--contrast-color);
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 12px 24px;
  border-radius: 5px;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.about .content .read-more i {
  font-size: 18px;
  margin-left: 5px;
  line-height: 0;
  transition: 0.3s;
}

.about .content .read-more:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
  padding-right: 19px;
}

.about .content .read-more:hover i {
  margin-left: 10px;
}

.about .icon-box {
  background-color: var(--surface-color);
  padding: 50px 40px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease-out 0s;
}

.about .icon-box i {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 0;
  transition: all 0.4s ease-out 0s;
  background-color: color-mix(in srgb, var(--accent-color), transparent 95%);
  color: var(--accent-color);
}

.about .icon-box h3 {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
}

.about .icon-box p {
  margin-bottom: 0;
}

.about .icon-box:hover i {
  background-color: var(--accent-color);
  color: var(--contrast-color);
}

.about .icon-boxes .col-md-6:nth-child(2) .icon-box,
.about .icon-boxes .col-md-6:nth-child(4) .icon-box {
  margin-top: -40px;
}

@media (max-width: 768px) {

  .about .icon-boxes .col-md-6:nth-child(2) .icon-box,
  .about .icon-boxes .col-md-6:nth-child(4) .icon-box {
    margin-top: 0;
  }
}

/*--------------------------------------------------------------
# Stats Section
--------------------------------------------------------------*/
.stats {
  position: relative;
  padding: 120px 0;
}

.stats img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.stats:before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 40%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.stats .container {
  position: relative;
  z-index: 3;
}

.stats .stats-item {
  padding: 30px;
  width: 100%;
}

.stats .stats-item span {
  font-size: 48px;
  display: block;
  color: var(--default-color);
  font-weight: 700;
}

.stats .stats-item p {
  padding: 0;
  margin: 0;
  font-family: var(--heading-font);
  font-size: 16px;
  font-weight: 700;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
}

/*--------------------------------------------------------------
# Services Section
--------------------------------------------------------------*/
.services .service-item {
  position: relative;
  padding-top: 40px;
}

.services .service-item:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: color-mix(in srgb, var(--default-color), transparent 90%);
}

.services .service-item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--accent-color);
  border-right: 5px solid var(--background-color);
}

.services .service-item .icon {
  width: 48px;
  height: 48px;
  position: relative;
  margin-right: 50px;
  line-height: 0;
}

.services .service-item .icon i {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  font-size: 56px;
  transition: ease-in-out 0.3s;
  z-index: 2;
  position: relative;
}

.services .service-item .icon:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  background: color-mix(in srgb, var(--accent-color), transparent 70%);
  border-radius: 50px;
  z-index: 1;
  bottom: -15px;
  right: -15px;
  transition: 0.3s;
}

.services .service-item .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.services .service-item .title a {
  color: var(--heading-color);
}

.services .service-item .title a:hover {
  color: var(--accent-color);
}

.services .service-item .description {
  line-height: 24px;
  font-size: 14px;
}

/*--------------------------------------------------------------
# Features Section
--------------------------------------------------------------*/
.features .features-item {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
}

.features .features-item+.features-item {
  margin-top: 100px;
}

@media (max-width: 768px) {
  .features .features-item+.features-item {
    margin-top: 40px;
  }
}

.features .features-item h3 {
  font-weight: 700;
  font-size: 26px;
}

.features .features-item .btn-get-started {
  background-color: var(--accent-color);
  color: var(--contrast-color);
  padding: 8px 30px 10px 30px;
  border-radius: 4px;
}

.features .features-item .btn-get-started:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 10%);
}

.features .features-item ul {
  list-style: none;
  padding: 0;
}

.features .features-item ul li {
  padding-bottom: 10px;
  display: flex;
  align-items: flex-start;
}

.features .features-item ul li:last-child {
  padding-bottom: 0;
}

.features .features-item ul i {
  font-size: 20px;
  padding-right: 4px;
  color: var(--accent-color);
}

.features .features-item img {
  border: 6px solid var(--surface-color);
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
}

.features .features-item .features-img-bg {
  position: relative;
  min-height: 500px;
}

@media (max-width: 640px) {
  .features .features-item .features-img-bg {
    min-height: 300px;
  }
}

.features .features-item .features-img-bg img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.features .features-item .image-stack {
  display: grid;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
}

.features .features-item .image-stack .stack-back {
  grid-column: 4/-1;
  grid-row: 1;
  width: 100%;
  z-index: 1;
}

.features .features-item .image-stack .stack-front {
  grid-row: 1;
  grid-column: 1/span 8;
  margin-top: 20%;
  width: 100%;
  z-index: 2;
}

/*--------------------------------------------------------------
# Portfolio Section
--------------------------------------------------------------*/
.portfolio .portfolio-filters {
  padding: 0;
  margin: 0 auto 20px auto;
  list-style: none;
  text-align: center;
}

.portfolio .portfolio-filters li {
  cursor: pointer;
  display: inline-block;
  padding: 8px 20px 10px 20px;
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 5px;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  font-family: var(--heading-font);
}

.portfolio .portfolio-filters li:hover,
.portfolio .portfolio-filters li.filter-active {
  color: var(--contrast-color);
  background-color: var(--accent-color);
}

.portfolio .portfolio-filters li:first-child {
  margin-left: 0;
}

.portfolio .portfolio-filters li:last-child {
  margin-right: 0;
}

@media (max-width: 575px) {
  .portfolio .portfolio-filters li {
    font-size: 14px;
    margin: 0 0 10px 0;
  }
}

.portfolio .portfolio-item {
  position: relative;
  overflow: hidden;
}

.portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: -100%;
  z-index: 3;
  transition: all ease-in-out 0.5s;
  background: color-mix(in srgb, var(--background-color), transparent 10%);
  padding: 15px;
}

.portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  font-weight: 600;
  padding-right: 50px;
}

.portfolio .portfolio-item .portfolio-info p {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  font-size: 14px;
  margin-bottom: 0;
  padding-right: 50px;
}

.portfolio .portfolio-item .portfolio-info .preview-link,
.portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 50px;
  font-size: 24px;
  top: calc(50% - 14px);
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  transition: 0.3s;
  line-height: 0;
}

.portfolio .portfolio-item .portfolio-info .preview-link:hover,
.portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: var(--accent-color);
}

.portfolio .portfolio-item .portfolio-info .details-link {
  right: 14px;
  font-size: 28px;
}

.portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
  bottom: 0;
}

/*--------------------------------------------------------------
# Pricing Section
--------------------------------------------------------------*/
.pricing {
  padding: 60px 0 120px 0;
}

.pricing .section-title {
  margin-bottom: 40px;
}

.pricing .pricing-item {
  background-color: var(--surface-color);
  box-shadow: 0 3px 20px -2px rgba(0, 0, 0, 0.1);
  padding: 60px 40px;
  height: 100%;
  position: relative;
  border-radius: 15px;
}

.pricing h3 {
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
}

.pricing .icon {
  margin: 30px auto 20px auto;
  width: 70px;
  height: 70px;
  background: var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  transform-style: preserve-3d;
}

.pricing .icon i {
  color: var(--background-color);
  font-size: 28px;
  transition: ease-in-out 0.3s;
  line-height: 0;
}

.pricing .icon::before {
  position: absolute;
  content: "";
  height: 86px;
  width: 86px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--accent-color), transparent 80%);
  transition: all 0.3s ease-out 0s;
  transform: translateZ(-1px);
}

.pricing .icon::after {
  position: absolute;
  content: "";
  height: 102px;
  width: 102px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--accent-color), transparent 90%);
  transition: all 0.3s ease-out 0s;
  transform: translateZ(-2px);
}

.pricing h4 {
  font-size: 48px;
  color: var(--accent-color);
  font-weight: 700;
  font-family: var(--heading-font);
  margin-bottom: 25px;
  text-align: center;
}

.pricing h4 sup {
  font-size: 28px;
}

.pricing h4 span {
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 18px;
  font-weight: 400;
}

.pricing ul {
  padding: 20px 0;
  list-style: none;
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  text-align: left;
  line-height: 20px;
}

.pricing ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.pricing ul i {
  color: #059652;
  font-size: 24px;
  padding-right: 3px;
}

.pricing ul .na {
  color: color-mix(in srgb, var(--default-color), transparent 70%);
}

.pricing ul .na i {
  color: color-mix(in srgb, var(--default-color), transparent 70%);
}

.pricing ul .na span {
  text-decoration: line-through;
}

.pricing .buy-btn {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  display: inline-block;
  padding: 8px 40px 10px 40px;
  border-radius: 50px;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
  transition: none;
  font-size: 16px;
  font-weight: 600;
  font-family: var(--heading-font);
  transition: 0.3s;
}

.pricing .buy-btn:hover {
  background-color: var(--accent-color);
  color: var(--contrast-color);
}

.pricing .featured {
  z-index: 10;
  border: 3px solid var(--accent-color);
}

@media (min-width: 992px) {
  .pricing .featured {
    transform: scale(1.15);
  }
}

/*--------------------------------------------------------------
# Faq Section
--------------------------------------------------------------*/
.faq .content h3 {
  font-weight: 400;
  font-size: 34px;
}

.faq .content p {
  font-size: 15px;
  color: color-mix(in srgb, var(--default-color), transparent 30%);
}

.faq .faq-container .faq-item {
  background-color: var(--surface-color);
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.faq .faq-container .faq-item:last-child {
  margin-bottom: 0;
}

.faq .faq-container .faq-item h3 {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin: 0 30px 0 0;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
}

.faq .faq-container .faq-item h3 .num {
  color: var(--accent-color);
  padding-right: 5px;
}

.faq .faq-container .faq-item h3:hover {
  color: var(--accent-color);
}

.faq .faq-container .faq-item .faq-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
}

.faq .faq-container .faq-item .faq-content p {
  margin-bottom: 0;
  overflow: hidden;
}

.faq .faq-container .faq-item .faq-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  line-height: 0;
  transition: 0.3s;
  cursor: pointer;
}

.faq .faq-container .faq-item .faq-toggle:hover {
  color: var(--accent-color);
}

.faq .faq-container .faq-active h3 {
  color: var(--accent-color);
}

.faq .faq-container .faq-active .faq-content {
  grid-template-rows: 1fr;
  visibility: visible;
  opacity: 1;
  padding-top: 10px;
}

.faq .faq-container .faq-active .faq-toggle {
  transform: rotate(90deg);
  color: var(--accent-color);
}

/*--------------------------------------------------------------
# Team Section
--------------------------------------------------------------*/
.team .member {
  position: relative;
}

.team .member .member-img {
  margin: 0 80px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 4px solid var(--background-color);
  box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
  .team .member .member-img {
    margin: 0 60px;
  }
}

.team .member .member-img img {
  position: relative;
  z-index: 1;
}

.team .member .member-img .social {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding-bottom: 20px;
  transition: 0.3s;
  visibility: hidden;
  opacity: 0;
}

.team .member .member-img .social a {
  transition: 0.3s;
  color: var(--contrast-color);
  font-size: 20px;
  margin: 0 8px;
}

.team .member .member-img .social a:hover {
  color: var(--accent-color);
}

.team .member .member-info {
  margin-top: 30px;
}

.team .member .member-info h4 {
  font-weight: 700;
  margin-bottom: 6px;
  font-size: 18px;
}

.team .member .member-info span {
  font-style: italic;
  display: block;
  font-size: 15px;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  margin-bottom: 10px;
}

.team .member .member-info p {
  margin-bottom: 0;
  font-size: 14px;
}

.team .member:hover .member-img .social {
  padding-bottom: 0;
  visibility: visible;
  opacity: 1;
}

/*--------------------------------------------------------------
# Call To Action Section
--------------------------------------------------------------*/
.call-to-action {
  padding: 80px 0;
  position: relative;
  clip-path: inset(0);
}

.call-to-action img {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.call-to-action:before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 50%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.call-to-action .container {
  position: relative;
  z-index: 3;
}

.call-to-action h3 {
  font-size: 28px;
  font-weight: 700;
  color: var(--default-color);
}

.call-to-action p {
  color: var(--default-color);
}

.call-to-action .cta-btn {
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 40px;
  border-radius: 5px;
  transition: 0.5s;
  margin: 10px;
  border: 2px solid var(--contrast-color);
  color: var(--contrast-color);
}

.call-to-action .cta-btn:hover {
  background: var(--accent-color);
  border: 2px solid var(--accent-color);
}

/*--------------------------------------------------------------
# Testimonials Section
--------------------------------------------------------------*/
.testimonials .info h3 {
  font-weight: 700;
  font-size: 32px;
}

.testimonials .swiper {
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--surface-color);
}

.testimonials .testimonials-carousel,
.testimonials .testimonials-slider {
  overflow: hidden;
}

.testimonials .testimonial-item {
  box-sizing: content-box;
  min-height: 200px;
  position: relative;
  margin: 30px;
}

.testimonials .testimonial-item .testimonial-img {
  width: 90px;
  height: 90px;
  border-radius: 50px;
  border: 6px solid var(--background-color);
  margin-right: 10px;
}

.testimonials .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px 0;
}

.testimonials .testimonial-item h4 {
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 14px;
  margin: 0;
}

.testimonials .testimonial-item .stars {
  margin: 10px 0;
}

.testimonials .testimonial-item .stars i {
  color: #ffc107;
  margin: 0 1px;
}

.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
  color: color-mix(in srgb, var(--accent-color), transparent 60%);
  font-size: 26px;
  line-height: 0;
}

.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
  transform: scale(-1, -1);
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 15px auto 15px auto;
}

.testimonials .swiper-wrapper {
  height: auto;
}

.testimonials .swiper-pagination {
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
}

.testimonials .swiper-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: color-mix(in srgb, var(--default-color), transparent 85%);
  opacity: 1;
  border: none;
}

.testimonials .swiper-pagination .swiper-pagination-bullet-active {
  background-color: var(--accent-color);
}

@media (max-width: 767px) {

  .testimonials .testimonials-carousel,
  .testimonials .testimonials-slider {
    overflow: hidden;
  }

  .testimonials .testimonial-item {
    margin: 15px;
  }
}

/*--------------------------------------------------------------
# Recent Posts Section
--------------------------------------------------------------*/
.recent-posts article {
  background: var(--surface-color);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.recent-posts .post-img {
  max-height: 240px;
  margin: -30px -30px 15px -30px;
  overflow: hidden;
}

.recent-posts .post-category {
  font-size: 16px;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  margin-bottom: 10px;
}

.recent-posts .title {
  font-size: 20px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 20px 0;
}

.recent-posts .title a {
  color: var(--heading-color);
  transition: 0.3s;
}

.recent-posts .title a:hover {
  color: var(--accent-color);
}

.recent-posts .post-author-img {
  width: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.recent-posts .post-author {
  font-weight: 600;
  margin-bottom: 5px;
}

.recent-posts .post-date {
  font-size: 14px;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Contact Section
--------------------------------------------------------------*/
.contact .info-item {
  background: color-mix(in srgb, var(--default-color), transparent 96%);
  padding: 30px;
}

.contact .info-item i {
  font-size: 38px;
  line-height: 0;
  color: var(--accent-color);
}

.contact .info-item h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0 10px 0;
}

.contact .info-item p {
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.contact .php-email-form {
  background: color-mix(in srgb, var(--default-color), transparent 96%);
  padding: 30px;
  height: 100%;
}

.contact .php-email-form input[type=text],
.contact .php-email-form input[type=email],
.contact .php-email-form textarea {
  font-size: 14px;
  padding: 10px 15px;
  box-shadow: none;
  border-radius: 0;
  color: var(--default-color);
  background-color: color-mix(in srgb, var(--background-color), transparent 50%);
  border-color: color-mix(in srgb, var(--default-color), transparent 80%);
}

.contact .php-email-form input[type=text]:focus,
.contact .php-email-form input[type=email]:focus,
.contact .php-email-form textarea:focus {
  border-color: var(--accent-color);
}

.contact .php-email-form input[type=text]::placeholder,
.contact .php-email-form input[type=email]::placeholder,
.contact .php-email-form textarea::placeholder {
  color: color-mix(in srgb, var(--default-color), transparent 70%);
}

.contact .php-email-form button[type=submit] {
  background: var(--accent-color);
  color: var(--contrast-color);
  border: 0;
  padding: 10px 30px;
  transition: 0.4s;
  border-radius: 4px;
}

.contact .php-email-form button[type=submit]:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
}

/*--------------------------------------------------------------
# Portfolio Details Section
--------------------------------------------------------------*/
.portfolio-details .portfolio-details-slider img {
  width: 100%;
}

.portfolio-details .swiper-wrapper {
  height: auto;
}

.portfolio-details .swiper-button-prev,
.portfolio-details .swiper-button-next {
  width: 48px;
  height: 48px;
}

.portfolio-details .swiper-button-prev:after,
.portfolio-details .swiper-button-next:after {
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.15);
  font-size: 24px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.portfolio-details .swiper-button-prev:hover:after,
.portfolio-details .swiper-button-next:hover:after {
  background-color: rgba(0, 0, 0, 0.3);
}

@media (max-width: 575px) {

  .portfolio-details .swiper-button-prev,
  .portfolio-details .swiper-button-next {
    display: none;
  }
}

.portfolio-details .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.portfolio-details .swiper-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: color-mix(in srgb, var(--default-color), transparent 85%);
  opacity: 1;
}

.portfolio-details .swiper-pagination .swiper-pagination-bullet-active {
  background-color: var(--accent-color);
}

.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.portfolio-details .portfolio-info h3:after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: var(--accent-color);
  left: 0;
  bottom: 0;
}

.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.portfolio-details .portfolio-info ul li {
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
}

.portfolio-details .portfolio-info ul strong {
  text-transform: uppercase;
  font-weight: 400;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 14px;
}

.portfolio-details .portfolio-info .btn-visit {
  padding: 8px 40px;
  background: var(--accent-color);
  color: var(--contrast-color);
  border-radius: 50px;
  transition: 0.3s;
}

.portfolio-details .portfolio-info .btn-visit:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
}

.portfolio-details .portfolio-description h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
  padding: 0;
}

.portfolio-details .portfolio-description .testimonial-item {
  padding: 30px 30px 0 30px;
  position: relative;
  background: color-mix(in srgb, var(--default-color), transparent 97%);
  margin-bottom: 50px;
}

.portfolio-details .portfolio-description .testimonial-item .testimonial-img {
  width: 90px;
  border-radius: 50px;
  border: 6px solid var(--background-color);
  float: left;
  margin: 0 10px 0 0;
}

.portfolio-details .portfolio-description .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0 5px 0;
  padding-top: 20px;
}

.portfolio-details .portfolio-description .testimonial-item h4 {
  font-size: 14px;
  color: #6c757d;
  margin: 0;
}

.portfolio-details .portfolio-description .testimonial-item .quote-icon-left,
.portfolio-details .portfolio-description .testimonial-item .quote-icon-right {
  color: color-mix(in srgb, var(--accent-color), transparent 50%);
  font-size: 26px;
  line-height: 0;
}

.portfolio-details .portfolio-description .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.portfolio-details .portfolio-description .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
  transform: scale(-1, -1);
}

.portfolio-details .portfolio-description .testimonial-item p {
  font-style: italic;
  margin: 0 0 15px 0 0 0;
  padding: 0;
}

/*--------------------------------------------------------------
# Service Details Section
--------------------------------------------------------------*/
.service-details .service-box {
  background-color: var(--surface-color);
  padding: 20px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
}

.service-details .service-box+.service-box {
  margin-top: 30px;
}

.service-details .service-box h4 {
  font-size: 20px;
  font-weight: 700;
  border-bottom: 2px solid color-mix(in srgb, var(--default-color), transparent 92%);
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.service-details .services-list {
  background-color: var(--surface-color);
}

.service-details .services-list a {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  background-color: color-mix(in srgb, var(--default-color), transparent 96%);
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin-top: 15px;
  transition: 0.3s;
}

.service-details .services-list a:first-child {
  margin-top: 0;
}

.service-details .services-list a i {
  font-size: 16px;
  margin-right: 8px;
  color: var(--accent-color);
}

.service-details .services-list a.active {
  color: var(--contrast-color);
  background-color: var(--accent-color);
}

.service-details .services-list a.active i {
  color: var(--contrast-color);
}

.service-details .services-list a:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 95%);
  color: var(--accent-color);
}

.service-details .download-catalog a {
  color: var(--default-color);
  display: flex;
  align-items: center;
  padding: 10px 0;
  transition: 0.3s;
  border-top: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
}

.service-details .download-catalog a:first-child {
  border-top: 0;
  padding-top: 0;
}

.service-details .download-catalog a:last-child {
  padding-bottom: 0;
}

.service-details .download-catalog a i {
  font-size: 24px;
  margin-right: 8px;
  color: var(--accent-color);
}

.service-details .download-catalog a:hover {
  color: var(--accent-color);
}

.service-details .help-box {
  background-color: var(--accent-color);
  color: var(--contrast-color);
  margin-top: 30px;
  padding: 30px 15px;
}

.service-details .help-box .help-icon {
  font-size: 48px;
}

.service-details .help-box h4,
.service-details .help-box a {
  color: var(--contrast-color);
}

.service-details .services-img {
  margin-bottom: 20px;
}

.service-details h3 {
  font-size: 26px;
  font-weight: 700;
}

.service-details p {
  font-size: 15px;
}

.service-details ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.service-details ul li {
  padding: 5px 0;
  display: flex;
  align-items: center;
}

.service-details ul i {
  font-size: 20px;
  margin-right: 8px;
  color: var(--accent-color);
}

/*--------------------------------------------------------------
# Blog Posts Section
--------------------------------------------------------------*/
.blog-posts article {
  background-color: var(--surface-color);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.blog-posts .post-img {
  max-height: 240px;
  margin: -30px -30px 15px -30px;
  overflow: hidden;
}

.blog-posts .post-category {
  font-size: 16px;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  margin-bottom: 10px;
}

.blog-posts .title {
  font-size: 20px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 20px 0;
}

.blog-posts .title a {
  color: var(--heading-color);
  transition: 0.3s;
}

.blog-posts .title a:hover {
  color: var(--accent-color);
}

.blog-posts .post-author-img {
  width: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.blog-posts .post-author {
  font-weight: 600;
  margin-bottom: 5px;
}

.blog-posts .post-date {
  font-size: 14px;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Blog Pagination Section
--------------------------------------------------------------*/
.blog-pagination {
  padding-top: 0;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
}

.blog-pagination ul {
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
}

.blog-pagination li {
  margin: 0 5px;
  transition: 0.3s;
}

.blog-pagination li a {
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  padding: 7px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-pagination li a.active,
.blog-pagination li a:hover {
  background: var(--accent-color);
  color: var(--contrast-color);
}

.blog-pagination li a.active a,
.blog-pagination li a:hover a {
  color: var(--contrast-color);
}

/*--------------------------------------------------------------
# Blog Details Section
--------------------------------------------------------------*/
.blog-details {
  padding-bottom: 30px;
}

.blog-details .article {
  background-color: var(--surface-color);
  padding: 30px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.blog-details .post-img {
  margin: -30px -30px 20px -30px;
  overflow: hidden;
}

.blog-details .title {
  color: var(--heading-color);
  font-size: 28px;
  font-weight: 700;
  padding: 0;
  margin: 30px 0;
}

.blog-details .content {
  margin-top: 20px;
}

.blog-details .content h3 {
  font-size: 22px;
  margin-top: 30px;
  font-weight: bold;
}

.blog-details .content blockquote {
  overflow: hidden;
  background-color: color-mix(in srgb, var(--default-color), transparent 95%);
  padding: 60px;
  position: relative;
  text-align: center;
  margin: 20px 0;
}

.blog-details .content blockquote p {
  color: var(--default-color);
  line-height: 1.6;
  margin-bottom: 0;
  font-style: italic;
  font-weight: 500;
  font-size: 22px;
}

.blog-details .content blockquote:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: var(--accent-color);
  margin-top: 20px;
  margin-bottom: 20px;
}

.blog-details .meta-top {
  margin-top: 20px;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
}

.blog-details .meta-top ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
}

.blog-details .meta-top ul li+li {
  padding-left: 20px;
}

.blog-details .meta-top i {
  font-size: 16px;
  margin-right: 8px;
  line-height: 0;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
}

.blog-details .meta-top a {
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  font-size: 14px;
  display: inline-block;
  line-height: 1;
}

.blog-details .meta-bottom {
  padding-top: 10px;
  border-top: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
}

.blog-details .meta-bottom i {
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  display: inline;
}

.blog-details .meta-bottom a {
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  transition: 0.3s;
}

.blog-details .meta-bottom a:hover {
  color: var(--accent-color);
}

.blog-details .meta-bottom .cats {
  list-style: none;
  display: inline;
  padding: 0 20px 0 0;
  font-size: 14px;
}

.blog-details .meta-bottom .cats li {
  display: inline-block;
}

.blog-details .meta-bottom .tags {
  list-style: none;
  display: inline;
  padding: 0;
  font-size: 14px;
}

.blog-details .meta-bottom .tags li {
  display: inline-block;
}

.blog-details .meta-bottom .tags li+li::before {
  padding-right: 6px;
  color: var(--default-color);
  content: ",";
}

.blog-details .meta-bottom .share {
  font-size: 16px;
}

.blog-details .meta-bottom .share i {
  padding-left: 5px;
}

/*--------------------------------------------------------------
# Blog Author Section
--------------------------------------------------------------*/
.blog-author {
  padding: 10px 0 40px 0;
}

.blog-author .author-container {
  background-color: var(--surface-color);
  padding: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.blog-author img {
  max-width: 120px;
  margin-right: 20px;
}

.blog-author h4 {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 0px;
  padding: 0;
  color: color-mix(in srgb, var(--default-color), transparent 20%);
}

.blog-author .social-links {
  margin: 0 10px 10px 0;
}

.blog-author .social-links a {
  color: color-mix(in srgb, var(--default-color), transparent 60%);
  margin-right: 5px;
}

.blog-author p {
  font-style: italic;
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Blog Comments Section
--------------------------------------------------------------*/
.blog-comments {
  padding: 10px 0;
}

.blog-comments .comments-count {
  font-weight: bold;
}

.blog-comments .comment {
  margin-top: 30px;
  position: relative;
}

.blog-comments .comment .comment-img {
  margin-right: 14px;
}

.blog-comments .comment .comment-img img {
  width: 60px;
}

.blog-comments .comment h5 {
  font-size: 16px;
  margin-bottom: 2px;
}

.blog-comments .comment h5 a {
  font-weight: bold;
  color: var(--default-color);
  transition: 0.3s;
}

.blog-comments .comment h5 a:hover {
  color: var(--accent-color);
}

.blog-comments .comment h5 .reply {
  padding-left: 10px;
  color: color-mix(in srgb, var(--default-color), transparent 20%);
}

.blog-comments .comment h5 .reply i {
  font-size: 20px;
}

.blog-comments .comment time {
  display: block;
  font-size: 14px;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  margin-bottom: 5px;
}

.blog-comments .comment.comment-reply {
  padding-left: 40px;
}

/*--------------------------------------------------------------
# Comment Form Section
--------------------------------------------------------------*/
.comment-form {
  padding-top: 10px;
}

.comment-form form {
  background-color: var(--surface-color);
  margin-top: 30px;
  padding: 30px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.comment-form form h4 {
  font-weight: bold;
  font-size: 22px;
}

.comment-form form p {
  font-size: 14px;
}

.comment-form form input {
  background-color: var(--surface-color);
  color: var(--default-color);
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 70%);
  font-size: 14px;
  border-radius: 4px;
  padding: 10px 10px;
}

.comment-form form input:focus {
  color: var(--default-color);
  background-color: var(--surface-color);
  box-shadow: none;
  border-color: var(--accent-color);
}

.comment-form form input::placeholder {
  color: color-mix(in srgb, var(--default-color), transparent 50%);
}

.comment-form form textarea {
  background-color: var(--surface-color);
  color: var(--default-color);
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 70%);
  border-radius: 4px;
  padding: 10px 10px;
  font-size: 14px;
  height: 120px;
}

.comment-form form textarea:focus {
  color: var(--default-color);
  box-shadow: none;
  border-color: var(--accent-color);
  background-color: var(--surface-color);
}

.comment-form form textarea::placeholder {
  color: color-mix(in srgb, var(--default-color), transparent 50%);
}

.comment-form form .form-group {
  margin-bottom: 25px;
}

.comment-form form .btn-primary {
  border-radius: 4px;
  padding: 10px 20px;
  border: 0;
  background-color: var(--accent-color);
  color: var(--contrast-color);
}

.comment-form form .btn-primary:hover {
  color: var(--contrast-color);
  background-color: color-mix(in srgb, var(--accent-color), transparent 20%);
}

/*--------------------------------------------------------------
# Starter Section Section
--------------------------------------------------------------*/
.starter-section {
  /* Add your styles here */
}

/*--------------------------------------------------------------
# Widgets
--------------------------------------------------------------*/
.widgets-container {
  background-color: var(--surface-color);
  padding: 30px;
  margin: 60px 0 30px 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.widget-title {
  color: var(--heading-color);
  font-size: 20px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 20px 0;
}

.widget-item {
  margin-bottom: 40px;
}

.widget-item:last-child {
  margin-bottom: 0;
}

.search-widget form {
  background: var(--background-color);
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 70%);
  padding: 3px 10px;
  position: relative;
  transition: 0.3s;
}

.search-widget form input[type=text] {
  border: 0;
  padding: 4px;
  border-radius: 4px;
  width: calc(100% - 40px);
  background-color: var(--background-color);
  color: var(--default-color);
}

.search-widget form input[type=text]:focus {
  outline: none;
}

.search-widget form button {
  background: var(--accent-color);
  color: var(--contrast-color);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  font-size: 16px;
  padding: 0 15px;
  margin: -1px;
  transition: 0.3s;
  border-radius: 0 4px 4px 0;
  line-height: 0;
}

.search-widget form button i {
  line-height: 0;
}

.search-widget form button:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
}

.search-widget form:is(:focus-within) {
  border-color: var(--accent-color);
}

.categories-widget ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.categories-widget ul li {
  padding-bottom: 10px;
}

.categories-widget ul li:last-child {
  padding-bottom: 0;
}

.categories-widget ul a {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  transition: 0.3s;
}

.categories-widget ul a:hover {
  color: var(--accent-color);
}

.categories-widget ul a span {
  padding-left: 5px;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 14px;
}

.recent-posts-widget .post-item {
  display: flex;
  margin-bottom: 15px;
}

.recent-posts-widget .post-item:last-child {
  margin-bottom: 0;
}

.recent-posts-widget .post-item img {
  width: 80px;
  margin-right: 15px;
}

.recent-posts-widget .post-item h4 {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
}

.recent-posts-widget .post-item h4 a {
  color: var(--default-color);
  transition: 0.3s;
}

.recent-posts-widget .post-item h4 a:hover {
  color: var(--accent-color);
}

.recent-posts-widget .post-item time {
  display: block;
  font-style: italic;
  font-size: 14px;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
}

.tags-widget {
  margin-bottom: -10px;
}

.tags-widget ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tags-widget ul li {
  display: inline-block;
}

.tags-widget ul a {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  font-size: 14px;
  padding: 6px 14px;
  margin: 0 6px 8px 0;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 60%);
  display: inline-block;
  transition: 0.3s;
}

.tags-widget ul a:hover {
  background: var(--accent-color);
  color: var(--contrast-color);
  border: 1px solid var(--accent-color);
}

.tags-widget ul a span {
  padding-left: 5px;
  color: color-mix(in srgb, var(--default-color), transparent 60%);
  font-size: 14px;
}
    </div>
  )
}
