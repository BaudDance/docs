---
sidebar_position: 1.0
---
# 【GPIO】点灯大师

GPIO的第一个例子：控制GPIO输出高电平，点亮学习板正面的LED。

## 如何使用例程

编译并下载程序到学习板，即可看到程序效果：红色LED点亮

## 例程讲解

下面介绍了如何自己实现该例程的功能

#### 1、工程配置

- 在工程配置页面，将PA6、PA7、PB0都配置为GPIO_Outpu，并分别设置User Label为BLUE、GREEN、RED

<img src='./img/LED/gpio config.png' width="60%" />

#### 2、代码

- 在main.c文件中编写HAL_GPIO_WritePin函数来改变GPIO的输出电平
- 这三行代码分别控制红、蓝、绿三个灯对应GPIO的输出电平

```c
HAL_GPIO_WritePin(RED_GPIO_Port, RED_Pin, GPIO_PIN_SET); //红色，点亮
HAL_GPIO_WritePin(BLUE_GPIO_Port, BLUE_Pin, GPIO_PIN_RESET); //蓝色，熄灭
HAL_GPIO_WritePin(GREEN_GPIO_Port, GREEN_Pin, GPIO_PIN_RESET); //绿色，熄灭
```

函数最后一个参数：`GPIO_PIN_SET`设置为高电平（点亮），`GPIO_PIN_RESET`设置为低电平（熄灭）

- 三个LED可以同时点亮，尝试不同的组合能显现出不同的颜色~

<img src="img/LED/RGB.png" style="zoom:60%;" />

## 故障排除

- 找不到gpio.c文件：打开GPIO_RGB_LED.ioc配置文件，进入Project Manager-Code Generator，勾选Generate peripheral initialization as a pair of '.c/.h' files per peripheral，保存并重新生成代码，就有单独的gpio.c文件了

<img src="img/LED/勾选生成独立初始化文件.png" style="zoom: 50%;" />

- 打开.ioc配置文件时弹出对话框”New STM32Cube firmware version available“：因为您的软件版本比例程高，此时建议直接点击”Migrate“迁移到您的版本即可，以后再打开就不会出现了。

<img src="img/LED/New version dialog.png" style="zoom: 80%;" />
