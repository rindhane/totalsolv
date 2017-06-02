
=====
totalsolv
=====

totalsolv is a simple Django app to support the problem resolution for customers.

Detailed documentation is in the "docs" directory.

Quick start
-----------

1. Add "totalsolv" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        totalsolv.apps.TotalsolvConfig,
    ]

2. Include the polls URLconf in your project urls.py like this::

    url('^', include('django.contrib.auth.urls')),
    url(r'^accounts/login/$', auth_views.LoginView.as_view(template_name='totalsolv/login.html')),
    url(r'^totalsolv/',include('totalsolv.urls')),

3. Run `python manage.py migrate` to create the polls models.

4. Visit http://127.0.0.1:8000/totalsolv/ to enter into the app.
