# HAL库函数速查手册

## GPIO
```c
HAL_GPIO_WritePin(端口, 引脚号, 电平状态);   // 写引脚电平
HAL_GPIO_ReadPin(端口, 引脚号);             // 读引脚电平
HAL_GPIO_TogglePin(端口, 引脚号);           // 翻转引脚电平
```

## UART
```c
HAL_UART_Transmit(&串口句柄, 数据指针, 数据长度, 超时时间);    // 串口发送（阻塞方式）
HAL_UART_Receive(&串口句柄, 数据指针, 数据长度, 超时时间);     // 串口接收（阻塞方式）

HAL_UART_Transmit_IT(&串口句柄, 数据指针, 数据长度);           // 串口发送（中断方式）
HAL_UART_Receive_IT(&串口句柄, 数据指针, 数据长度);            // 串口接收（中断方式）

HAL_UART_Transmit_DMA(&串口句柄, 数据指针, 数据长度);          // 串口发送（DMA方式）
HAL_UART_Receive_DMA(&串口句柄, 数据指针, 数据长度);           // 串口接收（DMA方式）
```

## IIC

```c
HAL_I2C_Master_Transmit(&I2C句柄, 设备地址, 数据指针, 数据长度, 超时时间);   // 主机发送数据（阻塞方式）
HAL_I2C_Master_Receive(&I2C句柄, 设备地址, 数据指针, 数据长度, 超时时间);    // 主机接收数据（阻塞方式）

HAL_I2C_Master_Transmit_IT(&I2C句柄, 设备地址, 数据指针, 数据长度);          // 主机发送数据（中断方式）
HAL_I2C_Master_Receive_IT(&I2C句柄, 设备地址, 数据指针, 数据长度);           // 主机接收数据（中断方式）

HAL_I2C_Master_Transmit_DMA(&I2C句柄, 设备地址, 数据指针, 数据长度);         // 主机发送数据（DMA方式）
HAL_I2C_Master_Receive_DMA(&I2C句柄, 设备地址, 数据指针, 数据长度);          // 主机接收数据（DMA方式）

```

## SPI

```c
HAL_SPI_Transmit(&SPI句柄, 数据指针, 数据长度, 超时时间);      // 发送数据（阻塞方式）
HAL_SPI_Receive(&SPI句柄, 数据指针, 数据长度, 超时时间);       // 接收数据（阻塞方式）
HAL_SPI_TransmitReceive(&SPI句柄, 发送指针, 接收指针, 数据长度, 超时时间);  // 同时收发（阻塞方式）

HAL_SPI_Transmit_IT(&SPI句柄, 数据指针, 数据长度);             // 发送数据（中断方式）
HAL_SPI_Receive_IT(&SPI句柄, 数据指针, 数据长度);              // 接收数据（中断方式）
HAL_SPI_TransmitReceive_IT(&SPI句柄, 发送指针, 接收指针, 数据长度);  // 同时收发（中断方式）

HAL_SPI_Transmit_DMA(&SPI句柄, 数据指针, 数据长度);            // 发送数据（DMA方式）
HAL_SPI_Receive_DMA(&SPI句柄, 数据指针, 数据长度);             // 接收数据（DMA方式）
HAL_SPI_TransmitReceive_DMA(&SPI句柄, 发送指针, 接收指针, 数据长度); // 同时收发（DMA方式）
```

## 定时器

```c
HAL_TIM_Base_Start(&定时器句柄);                    // 启动基本定时器（不带中断）
HAL_TIM_Base_Start_IT(&定时器句柄);                 // 启动基本定时器（中断方式）
HAL_TIM_Base_Stop(&定时器句柄);                     // 停止基本定时器（不带中断）
HAL_TIM_Base_Stop_IT(&定时器句柄);                  // 停止基本定时器（中断方式）

HAL_TIM_PWM_Start(&定时器句柄, 通道);               // 启动PWM输出
HAL_TIM_PWM_Stop(&定时器句柄, 通道);                // 停止PWM输出

HAL_TIM_IC_Start(&定时器句柄, 通道);                // 启动输入捕获
HAL_TIM_IC_Stop(&定时器句柄, 通道);                 // 停止输入捕获

HAL_TIM_Encoder_Start(&定时器句柄, 通道组合);        // 启动编码器模式
HAL_TIM_Encoder_Stop(&定时器句柄, 通道组合);         // 停止编码器模式
```

## ADC
```c
HAL_ADC_Start(&ADC句柄);                   // 启动ADC转换（阻塞方式）
HAL_ADC_Stop(&ADC句柄);                    // 停止ADC转换

HAL_ADC_Start_IT(&ADC句柄);                // 启动ADC转换（中断方式）
HAL_ADC_Stop_IT(&ADC句柄);                 // 停止ADC转换（中断方式）

HAL_ADC_Start_DMA(&ADC句柄, 数据指针, 长度);   // 启动ADC转换（DMA方式）
HAL_ADC_Stop_DMA(&ADC句柄);                   // 停止ADC转换（DMA方式）

HAL_ADC_PollForConversion(&ADC句柄, 超时时间);  // 等待ADC转换完成（阻塞轮询）
HAL_ADC_GetValue(&ADC句柄);                   // 获取ADC采样值

```

## 中断/事件回调函数

```c
HAL_GPIO_EXTI_Callback(uint16_t 引脚号);            // 外部中断回调（GPIO口触发）

HAL_UART_TxCpltCallback(UART_HandleTypeDef *串口句柄);       // UART发送完成回调（中断/DMA）
HAL_UART_RxCpltCallback(UART_HandleTypeDef *串口句柄);       // UART接收完成回调（中断/DMA）
HAL_UARTEx_RxEventCallback(UART_HandleTypeDef *串口句柄, uint16_t 数据长度);  // UART接收事件回调（如IDLE触发接收长度）

HAL_I2C_MasterTxCpltCallback(I2C_HandleTypeDef *I2C句柄);    // I2C主机发送完成回调（中断/DMA）
HAL_I2C_MasterRxCpltCallback(I2C_HandleTypeDef *I2C句柄);    // I2C主机接收完成回调（中断/DMA）

HAL_SPI_TxCpltCallback(SPI_HandleTypeDef *SPI句柄);           // SPI发送完成回调（中断/DMA）
HAL_SPI_RxCpltCallback(SPI_HandleTypeDef *SPI句柄);           // SPI接收完成回调（中断/DMA）
HAL_SPI_TxRxCpltCallback(SPI_HandleTypeDef *SPI句柄);         // SPI同时收发完成回调（中断/DMA）

HAL_ADC_ConvCpltCallback(ADC_HandleTypeDef *ADC句柄);         // ADC转换完成回调（阻塞/中断/DMA）

HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *定时器句柄); // 定时器周期溢出回调
HAL_TIM_IC_CaptureCallback(TIM_HandleTypeDef *定时器句柄);    // 定时器输入捕获完成回调
HAL_TIM_PWM_PulseFinishedCallback(TIM_HandleTypeDef *定时器句柄); // PWM脉冲完成回调
```
<!-- import DocCardList from '@theme/DocCardList'; -->
<!-- <DocCardList /> -->