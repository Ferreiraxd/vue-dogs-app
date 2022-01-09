# Aplicación Vue de razas de perros.

Por favor, leer descripción.

Esta aplicación incluye su distribuitivo para probar directamente en servidor.

No se utiliza axios ya que sería incluir una libreria a un proyecto pequeño sólo implicaría uso de recursos innecesarios, que impedirían optimizar la aplicación.

Se realiza según el uso de 2 endpoints específicos.

"https://dog.ceo/api/breeds/list" "https://dog.ceo/api/breed/{breed name}/images"

Existen alternativas como:

"https://dog.ceo/api/breed/{breed name}/images/random/{number of images}"

pero se realiza bajo las instrucciones específicas.

Bien simple pero funcional.

## Instalación del proyecto
```
npm install
```

### Compila y realiza recargas rápidas de contenido para el desarrollo
```
npm run serve
```

### Compila y minifíca para produccion
```
npm run build
```

### Customizar configuración
Ver [Referencias de configuración](https://cli.vuejs.org/config/).
