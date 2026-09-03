# Libra Server Dot Site

Sitio web personal y proyecto de servidor autohospedado de **Libra Server**.

Este repositorio contiene el código fuente del sitio web de Libra Server, incluyendo la página principal, las páginas de información y documentación, además de la interfaz del blog, que se conecta con una instalación propia de Ghost.

El sitio está diseñado para ser ligero, sencillo de mantener y servir como un punto central para documentar el proyecto Libra Server, compartir actualizaciones, proyectos e información relacionada con el servidor.

## ✨ Características

* 🌐 Sitio web personal y del proyecto Libra Server
* 📝 Blog integrado mediante Ghost
* 🖥️ Alojamiento propio mediante Nginx
* 📚 Documentación e información del proyecto
* 🎨 Interfaz personalizada y adaptable
* ⚡ Frontend ligero basado en HTML, CSS y JavaScript
* 🔄 Despliegue automático desde GitHub
* 🔒 Infraestructura diseñada para funcionar de forma autohospedada

## 🏗️ Tecnologías

El sitio utiliza actualmente:

* HTML
* CSS
* JavaScript
* Nginx
* Ghost para el blog
* GitHub para el control de versiones y despliegue
* Cloudflare Tunnel para el acceso público

## 🚀 Despliegue

El sitio web está alojado en un servidor administrado de forma propia mediante Nginx.

Los cambios se realizan localmente y posteriormente se suben a GitHub. El servidor comprueba periódicamente la rama `main` en busca de nuevos commits y descarga automáticamente los cambios aprobados.

```text
PC local
   │
   │ git push
   ▼
GitHub
   │
   │ comprobación periódica
   ▼
Servidor Libra
   │
   ▼
Nginx
   │
   ▼
Sitio web
```

Este sistema permite revisar y confirmar los cambios antes de que sean desplegados en el sitio web.

## 📝 Blog

La sección del blog obtiene las publicaciones desde la instalación de Ghost de Libra Server mediante la API de contenido de Ghost.

El sitio muestra información como:

* Título de la publicación
* Fecha de publicación
* Categoría
* Extracto
* Autor
* Imagen destacada
* Enlace a la publicación completa

Ghost se encarga de la creación y administración del contenido del blog, mientras que este repositorio proporciona la interfaz utilizada para mostrarlo en el sitio web.

## 🤝 Contribuciones

Las contribuciones, sugerencias, mejoras y correcciones son bienvenidas.

Si deseas contribuir:

1. Haz un fork del repositorio.
2. Crea una rama para tus cambios.
3. Realiza las modificaciones.
4. Comprueba que todo funcione correctamente.
5. Abre un Pull Request.

## 📜 Licencias

Este proyecto puede incluir componentes distribuidos bajo diferentes licencias de código abierto.

### Apache License 2.0

Los componentes identificados como **Apache License 2.0** se distribuyen bajo los términos de la Apache License, versión 2.0.

Consulta [`LICENSE-APACHE`](LICENSE-APACHE) para obtener el texto completo de la licencia.

La Apache License 2.0 es una licencia de código abierto permisiva que permite utilizar, modificar y redistribuir el software de acuerdo con sus términos.

Más información:

* https://www.apache.org/licenses/LICENSE-2.0

### GNU General Public License v3.0

Los componentes identificados como **GPLv3** se distribuyen bajo los términos de la GNU General Public License, versión 3.

Consulta [`LICENSE-GPL`](LICENSE-GPL) para obtener el texto completo de la licencia.

La GPLv3 permite utilizar, estudiar, modificar y redistribuir el software cubierto por la licencia, siempre respetando sus condiciones.

Más información:

* https://www.gnu.org/licenses/gpl-3.0.html

### Software de terceros

Este proyecto puede utilizar software, librerías, fuentes, iconos u otros recursos de terceros que estén distribuidos bajo sus propias licencias.

Dichas licencias continúan siendo aplicables a los respectivos componentes de terceros.

Antes de redistribuir el proyecto, revisa las licencias y los archivos de atribución correspondientes.

## ⚠️ Aviso

Este proyecto se proporciona **tal cual**, sin garantías de ningún tipo.

El usuario es responsable de revisar la configuración, dependencias, software de terceros y licencias antes de utilizar o redistribuir el proyecto.

## 👤 Autor

**Eduardo Calderón Mora**

Proyecto personal de servidor autohospedado y desarrollo web.
