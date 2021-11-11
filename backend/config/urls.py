from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('daily/', include('daily.urls')),  # これと
    path('markdownx/', include('markdownx.urls')),  # これを追加
]
