import useStore from '@/store/useStore';
import useFloatText, { floatTextTypes } from '@/components/floatText/useFloatText';
import useSubstrate from '@/components/harvest/useSubstrate';
import formatMoney from '@/utils/formatMoney';
import { harvestAction } from '@/store/actions';

const { incomePerClick } = useStore();
const { addFloatTextItem } = useFloatText();
const { addSubstrate } = useSubstrate();
const harvestRarities = [
  {
    multiplier: 1,
    type: floatTextTypes.COMMON,
    animationDurationMs: 600,
  },
  {
    multiplier: 2,
    type: floatTextTypes.UNCOMMON,
    animationDurationMs: 1200,
  },
  {
    multiplier: 5,
    type: floatTextTypes.RARE,
    animationDurationMs: 1800,
  },
  {
    multiplier: 20,
    type: floatTextTypes.EPIC,
    animationDurationMs: 2400,
  },
  {
    multiplier: 100,
    type: floatTextTypes.LEGENDARY,
    animationDurationMs: 3000,
  },
];

function getHarvestRarityItem() {
  const rand = Math.random();

  if (rand > 0.98) {
    return harvestRarities[4];
  }
  if (rand > 0.95) {
    return harvestRarities[3];
  }
  if (rand > 0.9) {
    return harvestRarities[2];
  }
  if (rand > 0.8) {
    return harvestRarities[1];
  }

  return harvestRarities[0];
}

const indentsForFloatText = {
  [floatTextTypes.COMMON]: {
    xCoefficient: 4.6,
    y: 20,
  },
  [floatTextTypes.UNCOMMON]: {
    xCoefficient: 5.1,
    y: 22,
  },
  [floatTextTypes.RARE]: {
    xCoefficient: 5.6,
    y: 24,
  },
  [floatTextTypes.EPIC]: {
    xCoefficient: 6.2,
    y: 26,
  },
  [floatTextTypes.LEGENDARY]: {
    xCoefficient: 6.7,
    y: 28,
  },
};

function renderIncomeFloatText(event, harvestRarityItem) {
  const { multiplier, type, animationDurationMs } = harvestRarityItem;
  const value = `+${formatMoney(incomePerClick.value * multiplier)}`;

  addFloatTextItem({
    value,
    coords: {
      x: event.pageX - indentsForFloatText[type].xCoefficient * value.length,
      y: event.pageY - indentsForFloatText[type].y,
    },
    type,
    animationDurationMs,
  });
}

export default (event) => {
  const harvestRarityItem = getHarvestRarityItem();

  harvestAction(incomePerClick.value * harvestRarityItem.multiplier);
  addSubstrate();
  renderIncomeFloatText(event, harvestRarityItem);
};
