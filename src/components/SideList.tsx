import React, { useMemo } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useUser from "../lib/firebase/hooks/useUser";
import { useNavigation } from "react-navi";

type Props = {
  open: boolean;
  onClose: React.ReactEventHandler<{}>;
};

const SideList: React.FC<Props> = ({ open, onClose }) => {
  const user = useUser();
  const isLoggedIn = useMemo(() => !!user, [user]);
  const navigation = useNavigation();

  function navigatoTo(to: string) {
    navigation.navigate(to);
  }
  return (
    <Drawer anchor="left" onClose={onClose} open={open}>
      <div style={{ width: "250px" }}>
        <List>
          {isLoggedIn ? (
            <>
              <ListItem
                button
                key="sale"
                onClick={e => {
                  navigatoTo("/sale");
                  onClose(e);
                }}
              >
                <ListItemText primary="売るぞ" />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem
                button
                key="login"
                onClick={e => {
                  navigatoTo("/login");
                  onClose(e);
                }}
              >
                <ListItemText primary="ログイン" />
              </ListItem>
              <ListItem
                button
                key="register"
                onClick={e => {
                  navigatoTo("/register");
                  onClose(e);
                }}
              >
                <ListItemText primary="アカウント作成" />
              </ListItem>
            </>
          )}
        </List>
      </div>
    </Drawer>
  );
};

export default SideList;
