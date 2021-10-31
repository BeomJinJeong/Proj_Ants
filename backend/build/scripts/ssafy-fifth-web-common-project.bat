@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem

@if "%DEBUG%" == "" @echo off
@rem ##########################################################################
@rem
@rem  ssafy-fifth-web-common-project startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%" == "" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%..

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

@rem Add default JVM options here. You can also use JAVA_OPTS and SSAFY_FIFTH_WEB_COMMON_PROJECT_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS="-Dkms.url=ws://i5b103.p.ssafy.io:8888/kurento"

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if "%ERRORLEVEL%" == "0" goto execute

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto execute

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\lib\ssafy-fifth-web-common-project-1.0-SNAPSHOT.jar;%APP_HOME%\lib\javax.annotation-api-1.2.jar;%APP_HOME%\lib\spring-boot-devtools-2.4.5.jar;%APP_HOME%\lib\spring-boot-starter-mail-2.4.5.jar;%APP_HOME%\lib\spring-boot-starter-websocket-2.4.5.jar;%APP_HOME%\lib\spring-boot-starter-web-2.4.5.jar;%APP_HOME%\lib\spring-boot-starter-security-2.4.5.jar;%APP_HOME%\lib\spring-boot-starter-data-jpa-2.4.5.jar;%APP_HOME%\lib\spring-boot-starter-actuator-2.4.5.jar;%APP_HOME%\lib\springfox-boot-starter-3.0.0.jar;%APP_HOME%\lib\springfox-swagger2-3.0.0.jar;%APP_HOME%\lib\springfox-data-rest-3.0.0.jar;%APP_HOME%\lib\springfox-bean-validators-3.0.0.jar;%APP_HOME%\lib\springfox-oas-3.0.0.jar;%APP_HOME%\lib\springfox-swagger-common-3.0.0.jar;%APP_HOME%\lib\springfox-swagger-ui-3.0.0.jar;%APP_HOME%\lib\springfox-spring-webmvc-3.0.0.jar;%APP_HOME%\lib\springfox-spring-webflux-3.0.0.jar;%APP_HOME%\lib\springfox-spring-web-3.0.0.jar;%APP_HOME%\lib\springfox-schema-3.0.0.jar;%APP_HOME%\lib\springfox-spi-3.0.0.jar;%APP_HOME%\lib\springfox-core-3.0.0.jar;%APP_HOME%\lib\spring-plugin-metadata-2.0.0.RELEASE.jar;%APP_HOME%\lib\spring-plugin-core-2.0.0.RELEASE.jar;%APP_HOME%\lib\commons-io-2.6.jar;%APP_HOME%\lib\commons-collections4-4.4.jar;%APP_HOME%\lib\webjars-locator-0.30.jar;%APP_HOME%\lib\commons-lang3-3.9.jar;%APP_HOME%\lib\querydsl-jpa-4.4.0.jar;%APP_HOME%\lib\querydsl-apt-4.4.0.jar;%APP_HOME%\lib\spring-boot-starter-mustache-2.4.5.jar;%APP_HOME%\lib\jquery-3.3.1.jar;%APP_HOME%\lib\sockjs-client-1.1.2.jar;%APP_HOME%\lib\stomp-websocket-2.3.3-1.jar;%APP_HOME%\lib\webrtc-adapter-7.4.0.jar;%APP_HOME%\lib\kurento-client-6.16.0.jar;%APP_HOME%\lib\kurento-utils-js-6.15.0.jar;%APP_HOME%\lib\converter-jackson-2.7.1.jar;%APP_HOME%\lib\retrofit-2.7.1.jar;%APP_HOME%\lib\logging-interceptor-3.9.0.jar;%APP_HOME%\lib\querydsl-codegen-4.4.0.jar;%APP_HOME%\lib\querydsl-core-4.4.0.jar;%APP_HOME%\lib\codegen-0.6.8.jar;%APP_HOME%\lib\reflections-0.9.9.jar;%APP_HOME%\lib\kurento-jsonrpc-client-6.16.0.jar;%APP_HOME%\lib\kurento-commons-6.16.0.jar;%APP_HOME%\lib\guava-29.0-jre.jar;%APP_HOME%\lib\java-jwt-3.10.3.jar;%APP_HOME%\lib\lombok-1.18.20.jar;%APP_HOME%\lib\mysql-connector-java-8.0.23.jar;%APP_HOME%\lib\spring-boot-starter-json-2.4.5.jar;%APP_HOME%\lib\spring-boot-starter-aop-2.4.5.jar;%APP_HOME%\lib\spring-boot-starter-jdbc-2.4.5.jar;%APP_HOME%\lib\spring-boot-starter-2.4.5.jar;%APP_HOME%\lib\spring-boot-actuator-autoconfigure-2.4.5.jar;%APP_HOME%\lib\spring-boot-autoconfigure-2.4.5.jar;%APP_HOME%\lib\spring-boot-actuator-2.4.5.jar;%APP_HOME%\lib\spring-boot-2.4.5.jar;%APP_HOME%\lib\spring-context-support-5.3.6.jar;%APP_HOME%\lib\jakarta.mail-1.6.7.jar;%APP_HOME%\lib\spring-boot-starter-tomcat-2.4.5.jar;%APP_HOME%\lib\spring-webmvc-5.3.6.jar;%APP_HOME%\lib\spring-websocket-5.3.6.jar;%APP_HOME%\lib\spring-security-web-5.4.6.jar;%APP_HOME%\lib\spring-web-5.3.6.jar;%APP_HOME%\lib\spring-messaging-5.3.6.jar;%APP_HOME%\lib\spring-security-config-5.4.6.jar;%APP_HOME%\lib\spring-data-jpa-2.4.8.jar;%APP_HOME%\lib\spring-security-core-5.4.6.jar;%APP_HOME%\lib\spring-context-5.3.6.jar;%APP_HOME%\lib\spring-aop-5.3.6.jar;%APP_HOME%\lib\jakarta.transaction-api-1.3.3.jar;%APP_HOME%\lib\jakarta.persistence-api-2.2.3.jar;%APP_HOME%\lib\hibernate-core-5.4.30.Final.jar;%APP_HOME%\lib\spring-aspects-5.3.6.jar;%APP_HOME%\lib\micrometer-core-1.6.6.jar;%APP_HOME%\lib\spring-orm-5.3.6.jar;%APP_HOME%\lib\spring-jdbc-5.3.6.jar;%APP_HOME%\lib\spring-data-commons-2.4.8.jar;%APP_HOME%\lib\spring-tx-5.3.6.jar;%APP_HOME%\lib\spring-beans-5.3.6.jar;%APP_HOME%\lib\webjars-locator-core-0.46.jar;%APP_HOME%\lib\swagger-models-1.5.20.jar;%APP_HOME%\lib\HikariCP-3.4.5.jar;%APP_HOME%\lib\spring-boot-starter-logging-2.4.5.jar;%APP_HOME%\lib\logback-classic-1.2.3.jar;%APP_HOME%\lib\log4j-to-slf4j-2.13.3.jar;%APP_HOME%\lib\jul-to-slf4j-1.7.30.jar;%APP_HOME%\lib\slf4j-api-1.7.30.jar;%APP_HOME%\lib\javax.inject-1.jar;%APP_HOME%\lib\jmustache-1.15.jar;%APP_HOME%\lib\jackson-datatype-jdk8-2.11.4.jar;%APP_HOME%\lib\jackson-datatype-jsr310-2.11.4.jar;%APP_HOME%\lib\jackson-module-parameter-names-2.11.4.jar;%APP_HOME%\lib\jackson-databind-2.11.4.jar;%APP_HOME%\lib\kms-api-filters-6.16.0.jar;%APP_HOME%\lib\kms-api-elements-6.16.0.jar;%APP_HOME%\lib\kms-api-core-6.16.0.jar;%APP_HOME%\lib\okhttp-3.14.9.jar;%APP_HOME%\lib\failureaccess-1.0.1.jar;%APP_HOME%\lib\listenablefuture-9999.0-empty-to-avoid-conflict-with-guava.jar;%APP_HOME%\lib\jsr305-3.0.2.jar;%APP_HOME%\lib\checker-qual-2.11.1.jar;%APP_HOME%\lib\error_prone_annotations-2.3.4.jar;%APP_HOME%\lib\j2objc-annotations-1.3.jar;%APP_HOME%\lib\fluent-hc-4.5.13.jar;%APP_HOME%\lib\httpclient-4.5.13.jar;%APP_HOME%\lib\commons-codec-1.15.jar;%APP_HOME%\lib\classmate-1.5.1.jar;%APP_HOME%\lib\swagger-annotations-1.5.20.jar;%APP_HOME%\lib\mapstruct-1.3.1.Final.jar;%APP_HOME%\lib\spring-expression-5.3.6.jar;%APP_HOME%\lib\spring-core-5.3.6.jar;%APP_HOME%\lib\jakarta.annotation-api-1.3.5.jar;%APP_HOME%\lib\snakeyaml-1.27.jar;%APP_HOME%\lib\jaxb-runtime-2.3.4.jar;%APP_HOME%\lib\jakarta.activation-1.2.2.jar;%APP_HOME%\lib\tomcat-embed-websocket-9.0.45.jar;%APP_HOME%\lib\tomcat-embed-core-9.0.45.jar;%APP_HOME%\lib\jakarta.el-3.0.3.jar;%APP_HOME%\lib\aspectjweaver-1.9.6.jar;%APP_HOME%\lib\hibernate-commons-annotations-5.1.2.Final.jar;%APP_HOME%\lib\jboss-logging-3.4.1.Final.jar;%APP_HOME%\lib\javassist-3.27.0-GA.jar;%APP_HOME%\lib\byte-buddy-1.10.22.jar;%APP_HOME%\lib\antlr-2.7.7.jar;%APP_HOME%\lib\jandex-2.2.3.Final.jar;%APP_HOME%\lib\dom4j-2.1.3.jar;%APP_HOME%\lib\HdrHistogram-2.1.12.jar;%APP_HOME%\lib\LatencyUtils-2.0.3.jar;%APP_HOME%\lib\mysema-commons-lang-0.2.4.jar;%APP_HOME%\lib\bridge-method-annotation-1.13.jar;%APP_HOME%\lib\classgraph-4.8.83.jar;%APP_HOME%\lib\jackson-core-2.11.4.jar;%APP_HOME%\lib\swagger-models-2.1.2.jar;%APP_HOME%\lib\jackson-annotations-2.11.4.jar;%APP_HOME%\lib\paranamer-2.8.jar;%APP_HOME%\lib\netty-handler-proxy-4.1.63.Final.jar;%APP_HOME%\lib\netty-codec-http-4.1.63.Final.jar;%APP_HOME%\lib\netty-handler-4.1.63.Final.jar;%APP_HOME%\lib\netty-codec-socks-4.1.63.Final.jar;%APP_HOME%\lib\netty-codec-4.1.63.Final.jar;%APP_HOME%\lib\netty-transport-4.1.63.Final.jar;%APP_HOME%\lib\okio-1.17.2.jar;%APP_HOME%\lib\swagger-annotations-2.1.2.jar;%APP_HOME%\lib\spring-jcl-5.3.6.jar;%APP_HOME%\lib\jakarta.xml.bind-api-2.3.3.jar;%APP_HOME%\lib\txw2-2.3.4.jar;%APP_HOME%\lib\istack-commons-runtime-3.0.12.jar;%APP_HOME%\lib\ecj-4.3.1.jar;%APP_HOME%\lib\annotations-2.0.1.jar;%APP_HOME%\lib\gson-2.8.6.jar;%APP_HOME%\lib\httpcore-4.4.14.jar;%APP_HOME%\lib\commons-logging-1.2.jar;%APP_HOME%\lib\netty-resolver-4.1.63.Final.jar;%APP_HOME%\lib\netty-buffer-4.1.63.Final.jar;%APP_HOME%\lib\netty-common-4.1.63.Final.jar;%APP_HOME%\lib\logback-core-1.2.3.jar;%APP_HOME%\lib\log4j-api-2.13.3.jar


@rem Execute ssafy-fifth-web-common-project
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %SSAFY_FIFTH_WEB_COMMON_PROJECT_OPTS%  -classpath "%CLASSPATH%"  %*

:end
@rem End local scope for the variables with windows NT shell
if "%ERRORLEVEL%"=="0" goto mainEnd

:fail
rem Set variable SSAFY_FIFTH_WEB_COMMON_PROJECT_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
if  not "" == "%SSAFY_FIFTH_WEB_COMMON_PROJECT_EXIT_CONSOLE%" exit 1
exit /b 1

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
