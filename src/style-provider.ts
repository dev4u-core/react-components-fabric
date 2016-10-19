import { GridStyle, IStyleProvider, StyleProvider } from 'dev4u.react-components';

class StyleProvider1 implements IStyleProvider {
    // IStyleProvider Members
    public getGridStyle(): GridStyle {
        return null;
    }
}

StyleProvider.Instance = new StyleProvider1();

