```jsx { "props": { "layout": false, "adaptivity": true } }
function MiniInfoCellExample() {
  const platform = usePlatform();
  const [activeModal, setActiveModal] = React.useState(null);

  const handleExtendedInfoClick = () => {
    setActiveModal('extended_info');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={closeModal}>
      <ModalPage
        header={
          <ModalPageHeader
            before={
              (platform === 'android' || platform === 'vkcom') && (
                <PanelHeaderButton onClick={closeModal}>
                  <Icon24Cancel />
                </PanelHeaderButton>
              )
            }
            after={
              platform === 'ios' && (
                <PanelHeaderButton onClick={closeModal}>
                  <Icon24Dismiss />
                </PanelHeaderButton>
              )
            }
          >
            Подробнее
          </ModalPageHeader>
        }
        id="extended_info"
      >
        <Spacing size={12} />
        <MiniInfoCell before={<Icon20CommunityName />} textWrap="full">
          Команда вконтакте
        </MiniInfoCell>

        <MiniInfoCell before={<Icon20MessageOutline />} textWrap="full">
          Официальная страница Команды ВКонтакте.
        </MiniInfoCell>

        <MiniInfoCell before={<Icon20ArticleOutline />} textWrap="full">
          ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с
          безграничными возможностями и миллионами пользователей.
        </MiniInfoCell>

        <Spacing size={24}>
          <Separator />
        </Spacing>

        <MiniInfoCell before={<Icon20PlaceOutline />}>Санкт-Петербург, Россия</MiniInfoCell>

        <MiniInfoCell before={<Icon20MentionOutline />}>team</MiniInfoCell>
        <Spacing size={12} />
      </ModalPage>
    </ModalRoot>
  );

  return (
    <View activePanel="information_cell">
      <Panel id="information_cell">
        <PanelHeader>Ячейка информации</PanelHeader>

        <Group>
          <MiniInfoCell before={<Icon20ArticleOutline />} textWrap="short">
            ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с
            безграничными возможностями и миллионами пользователей.
          </MiniInfoCell>

          <MiniInfoCell
            before={<Icon20FollowersOutline />}
            after={
              <UsersStack
                photos={[
                  getAvatarUrl('user_mm'),
                  getAvatarUrl('user_arthurstam'),
                  getAvatarUrl('user_xyz'),
                ]}
              />
            }
          >
            514,7K подписчиков · 77 друзей
          </MiniInfoCell>

          <MiniInfoCell before={<Icon20GlobeOutline />}>
            <Link href="https://vk.com/team">vk.com/team</Link>
          </MiniInfoCell>

          <MiniInfoCell
            mode="accent"
            before={<Icon20WorkOutline />}
            after={
              <Avatar
                size={24}
                src="https://sun9-29.userapi.com/c623616/v623616034/1c184/MnbEYczHxSY.jpg?ava=1"
              />
            }
          >
            Место работы: Команда ВКонтакте
          </MiniInfoCell>

          <MiniInfoCell
            before={<Icon20WorkOutline />}
            mode="add"
            onClick={() => console.log('Указать место учёбы')}
            textWrap="short"
            chevron
          >
            Укажите место учёбы
          </MiniInfoCell>

          <MiniInfoCell
            before={<Icon20Info />}
            mode="more"
            onClick={handleExtendedInfoClick}
            chevron
          >
            Подробная информация
          </MiniInfoCell>
        </Group>
        {modal}
      </Panel>
    </View>
  );
}

<MiniInfoCellExample />;
```
