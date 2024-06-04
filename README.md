Este es un proyecto para probar cómo generar
y ejecutar un fichero .jar con Dagger Engine sobre un proyecto Java con Spring Boot.

1. Primero debemos crear un nuevo proyecto Spring Boot con Maven.
2. Después añadimos un módulo Dagger ejecutando en la raíz "dagger init --name=my-module --sdk=typescript". Es importante que tengamos instalado Dagger Cli y Docker corriendo.
3. A continuación debemos instalar el módulo Java desde Daggerverse: "dagger install github.com/jcsirot/daggerverse/java@c591e9e0b99def2fc8a67bb090fca5cd06cf6a1d"
4. En ./dagger/src/index.ts borramos la plantilla por defecto y añadimos una función build que ejecute "mvn package" en el directorio raíz, excluyendo el directorio dagger/. También le indicamos que genere el fichero .jar en el directorio ./target/ .
5. En el método main de Application ponemos un "System.out.println("Hello World!");" para probar que se ejecuta correctamente.
6. Después ejecutamos "dagger call build --source=. export --path=./target/spring_boot_dagger-0.0.1-SNAPSHOT.jar". Este comando primero creará una imagen con el código que haya en el directorio que hemos pasado como parámetro "source" y después exportará el fichero .jar en el directorio que hemos pasado como parámetro "path".
7. Finalmente ejecutamos el fichero .jar con "java -jar ./target/spring_boot_dagger-0.0.1-SNAPSHOT.jar" y deberíamos ver por consola el mensaje "Hello World!".