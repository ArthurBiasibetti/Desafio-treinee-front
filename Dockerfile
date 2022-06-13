FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY build/ /usr/share/nginx/html
# COPY storybook-static/ /usr/share/nginx/storybook
