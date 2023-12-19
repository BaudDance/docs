---
sidebar_position: 1
---
# 定时器基础功能

## HAL_TIM_Base_Init
```c
HAL_StatusTypeDef HAL_TIM_Base_Init (TIM_HandleTypeDef * htim)
```
根据TIM_HandleTypeDef中指定的参数初始化TIM时间基单元，并初始化关联的句柄。

注意:
1. 从中心对齐计数器模式切换到边缘计数器模式需要将计时器重置(反之亦然)，以避免由于中心对齐模式中的DIR位只读而导致的意外方向。例如：在`HAL_TIM_Base_Init()`之前调用`HAL_TIM_Base_DeInit()`
2. 一般由CubeMX生成的`MX_TIMx_Init`函数调用

## HAL_TIM_Base_DeInit
```c
HAL_StatusTypeDef HAL_TIM_Base_DeInit (TIM_HandleTypeDef * htim)
```
[HAL_TIM_Base_Init](#hal_tim_base_init)的反向操作, 解除初始化TIM。

## HAL_TIM_Base_MspInit
```c
void HAL_TIM_Base_MspInit (TIM_HandleTypeDef * htim)
```
配置一些相关外设(例如NVIC等)
MSP的全称是MCU Support Package(芯片支持包)

注意:
1. 此函数由CubeMX根据当前配置与芯片自动生成
2. 此函数会在[HAL_TIM_Base_Init](#hal_tim_base_init)中被调用, 无需我们调用
3. CubeMX生成的此函数中有USER CODE注释对, 方便我们自行添加资源配置

## HAL_TIM_Base_MspDeInit
```c
void HAL_TIM_Base_MspDeInit (TIM_HandleTypeDef * htim)
```
[HAL_TIM_Base_MspInit](#hal_tim_base_mspinit)的反向操作

## HAL_TIM_Base_Start
```c
HAL_StatusTypeDef HAL_TIM_Base_Start (TIM_HandleTypeDef * htim)
```
以最普通的模式开启定时器, 使定时器开始计时.

## HAL_TIM_Base_Stop
```c
HAL_StatusTypeDef HAL_TIM_Base_Stop (TIM_HandleTypeDef * htim)
```
[HAL_TIM_Base_Start](#hal_tim_base_start)的反向操作, 停止定时器运行.

## HAL_TIM_Base_Start_IT
```c
HAL_StatusTypeDef HAL_TIM_Base_Start_IT (TIM_HandleTypeDef * htim)
```
以中断模式开启定时器计时.
注意:
1. 使用中断模式需要开启相应定时器的全局中断.
2. 调用此函数后, 定时器开始运行, 每当计数器达到自动重装载值时, HAL_TIM_PeriodElapsedCallback回调被调用

## HAL_TIM_Base_Stop_IT
```c
HAL_StatusTypeDef HAL_TIM_Base_Stop_IT (TIM_HandleTypeDef * htim)
```
[HAL_TIM_Base_Start_IT](#hal_tim_base_start_it)的反向操作, 停止定时器运行.

## HAL_TIM_Base_Start_DMA
```c
HAL_StatusTypeDef HAL_TIM_Base_Start_DMA (TIM_HandleTypeDef * htim, uint32_t * pData, uint16_t
Length)
```
以DMA模式开启定时器计时.
