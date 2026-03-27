import { useState } from "react";
import useSystemDarkPref from "./useSystemDarkPref.ts";
import { getInitThemeOptionName } from "./themeLs.ts";
import useEffectiveTheme from "./useEffectiveTheme.ts";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { themeOptionLabels } from "./models.ts";
import ToggleButton from "react-bootstrap/ToggleButton";
import type { ThemeOptionName } from "./types.ts";
import Card from "react-bootstrap/Card";

function App() {
  const systemDarkPref = useSystemDarkPref();
  const [themeOptionName, setThemeOptionName] = useState(
    getInitThemeOptionName(),
  );
  const effectiveTheme = useEffectiveTheme(themeOptionName, systemDarkPref);

  return (
    <main data-bs-theme={effectiveTheme}>
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
            onChange={() => setThemeOptionName(name as ThemeOptionName)}
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
