from django.shortcuts import render

from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = 'home.html'


class AboutUsView(TemplateView):
    template_name = 'about-us.html'


class AboutResultsView(TemplateView):
    template_name = 'about_results.html'


class CompetitionView(TemplateView):
    template_name = 'competition.html'


class CompetitionDetailView(TemplateView):
    template_name = 'competition_detail.html'


class ContactView(TemplateView):
    template_name = 'contact.html'


class CompetitionFormView(TemplateView):
    template_name = 'form.html'


class LoginView(TemplateView):
    template_name = 'login.html'


class ResultView(TemplateView):
    template_name = 'map.html'


class RulesView(TemplateView):
    template_name = 'rules.html'


class ProfileView(TemplateView):
    template_name = 'profile.html'

class GalleryView(TemplateView):
    template_name = 'works.html'


class RegistrationView(TemplateView):
    template_name = 'registration.html'
