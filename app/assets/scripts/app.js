import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".services__service"),"70%");
new RevealOnScroll($(".skills__element"),"50%");
var stickyHeader = new StickyHeader();
