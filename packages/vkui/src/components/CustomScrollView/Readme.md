Компонент, который кастомизирует полосу прокрутки

> Начиная с версии `7.0.0` по умолчанию используется нативная кастомизация скроллбара.
> Чтобы использовать старую реализацию с заменой браузерной полосы прокрутки на кастомную,
> вы можете использовать свойство `useFallback={true}`.

```jsx
const WithVerticalScroll = () => {
  return (
    <CustomScrollView
      windowResize={true}
      style={{
        height: 200,
      }}
    >
      <List>
        {['Say', 'Hello', 'To', 'My', 'Little', 'Friend'].map((item) => (
          <Cell key={item} before={<Avatar />}>
            {item}
          </Cell>
        ))}
      </List>
    </CustomScrollView>
  );
};

const WithHorizontalScroll = () => {
  const [recentFriends] = useState(getRandomUsers(20));
  return (
    <CustomScrollView windowResize={true} enableHorizontalScroll={true}>
      <div
        style={{
          width: 1440,
          display: 'flex',
          paddingBlockEnd: 20,
        }}
      >
        {recentFriends.map((item) => {
          return (
            <HorizontalCell onClick={() => {}} key={item.id} header={item.first_name}>
              <Avatar size={56} src={item.photo_200} />
            </HorizontalCell>
          );
        })}
      </div>
    </CustomScrollView>
  );
};


const Example = () => {
  return (
    <View activePanel="customScrollView">
      <Panel id="customScrollView">
        <PanelHeader>CustomScrollView</PanelHeader>
        <Group header={<Header mode="secondary">Вертикальный скролл</Header>}>
          <WithVerticalScroll />
        </Group>
        <Group header={<Header mode="secondary">Горизонтальный скролл</Header>}>
          <WithHorizontalScroll />
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
