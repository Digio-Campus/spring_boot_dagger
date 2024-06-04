import {
  dag,
  File,
  Directory,
  object,
  func,
} from "@dagger.io/dagger"


@object()
class MyModule {
  @func()
  build(source: Directory): File {
    return dag
        .java()
        .withJdk("17")
        .withMaven("3.9.7")
        .withProject(source.withoutDirectory("dagger"))
        .maven(["package"])
        .file("target/spring_boot_dagger-0.0.1-SNAPSHOT.jar")
  }
}