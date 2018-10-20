import * as React from 'react';

import * as styles from './index.module.css';

export interface Layer {
    id: string;
    name: string;
    visible?: boolean;
    locked: boolean;
}
export interface FlashTimelineProps {
    layers: Layer[];
    currentFrame?: number; // 0 ~
    zoom?: number; // 0.5 ~ 2
}
export default class FlashTimeline extends React.Component<FlashTimelineProps> {
    render() {
        const { layers, currentFrame = 0, zoom = 1 } = this.props;
        return (
            <div className={styles.flashTimeline}>
                <FlashTimelineHeader zoom={zoom} />
                <FlashTimelineLayers layers={layers} zoom={zoom} />
                <FlashTimelineFooter zoom={zoom} />
            </div>
        );
    }
}

interface HeaderProps {
    zoom: number;
}
class FlashTimelineHeader extends React.Component<HeaderProps> {
    render() {
        return (
            <div className={styles.flashTimelineHeader}>
                <div className={styles.side}>header</div>
            </div>
        );
    }
}

interface FlashTimelineLayersProps {
    layers: Layer[];
    zoom: number;
}
class FlashTimelineLayers extends React.Component<FlashTimelineLayersProps> {
    render() {
        const { layers } = this.props;
        return (
            <div className={styles.flashTimelineLayers}>
                {layers.map(layer => (
                    <FlashTimelineLayer key={layer.id} />
                ))}
            </div>
        );
    }
}

interface FlashTimelineLayerProps {}
class FlashTimelineLayer extends React.Component<FlashTimelineLayerProps> {
    render() {
        return (
            <div className={styles.flashTimelineLayer}>
                <div className={styles.side}>layer</div>
            </div>
        );
    }
}

interface FlashTimelineFooterProps {
    zoom: number;
}
class FlashTimelineFooter extends React.Component<FlashTimelineFooterProps> {
    render() {
        return (
            <div className={styles.flashTimelineFooter}>
                <div className={styles.side}>footer</div>
            </div>
        );
    }
}
