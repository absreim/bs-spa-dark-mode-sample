import { useState } from "react";
import {
  getInitThemeOptionName,
  setThemeOptionName as setLsThemeOptionName,
} from "./themeLs.ts";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { themeOptionLabels } from "./models.ts";
import ToggleButton from "react-bootstrap/ToggleButton";
import type { ThemeOptionName } from "./types.ts";
import Card from "react-bootstrap/Card";

function App() {
  const [themeOptionName, setThemeOptionName] = useState(
    getInitThemeOptionName(),
  );

  return (
    <main>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            The text and background of this card should change in response to
            color mode settings
          </Card.Text>
        </Card.Body>
      </Card>
      <ButtonGroup>
        {Object.keys(themeOptionLabels).map((name) => (
          <ToggleButton
            key={name}
            id={`radio-${name}`}
            type="radio"
            value={name}
            name="theme-selector"
            checked={themeOptionName === name}
            onChange={() => {
              setThemeOptionName(name as ThemeOptionName);
              setLsThemeOptionName(name as ThemeOptionName);
              (
                window as Window & typeof globalThis & { syncTheme: () => void }
              ).syncTheme();
            }}
            variant="outline-primary"
          >
            {themeOptionLabels[name as ThemeOptionName]}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </main>
  );
}

export default App;
