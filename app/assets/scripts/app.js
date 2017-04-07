import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".services__service"),"50%");
new RevealOnScroll($(".skills__element"),"50%");
