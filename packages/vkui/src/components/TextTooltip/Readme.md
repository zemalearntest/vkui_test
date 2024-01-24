> **Важно**
>
> Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](https://vkcom.github.io/VKUI/#/Unstable).

Тултип, открывающийся при наведении мыши на `children`. В качестве содержимого тултипа рекомендуется использовать только текст.

```jsx { "props": { "layout": false, "iframe": false } }
<Div style={{ backgroundColor: 'red', padding: '30px' }}>
  <TextTooltip text={<span>copy</span>}>
    <Icon16CopyOutline />
  </TextTooltip>
</Div>
```
