// MIGRATE THIS COMPONENT TO A MANTINE TABLE
import { FC } from "react";

import {
  caloricBasis,
  caloriesByNutrient,
  percentDryMatter,
  nutrientCalories,
  percentNutrientDM,
  asFed,
  roundAccurately,
} from "@/utils/commonCalculations";
import { atwaterFactor } from "@/utils/commonVariables";

type StyledTdProps = {
  value: number;
};

const StyledProteinTd = styled.td<StyledTdProps>`
  ${(props) => {
    if (props.value < 18) {
      return css`
        ${tw`text-slate-500`};
      `;
    }

    if (props.value >= 18 && props.value <= 22) {
      return css`
        ${tw`bg-green-100 text-green-800`};
      `;
    }

    if (props.value > 22) {
      return css`
        ${tw`text-green-800`};
      `;
    }
  }};
`;

const StyledFatTd = styled.td<StyledTdProps>`
  ${(props) => {
    if (props.value < 8) {
      return css`
        ${tw`text-slate-500`};
      `;
    }

    if (props.value >= 8 && props.value <= 12) {
      return css`
        ${tw`bg-green-100 text-green-800`};
      `;
    }

    if (props.value > 12) {
      return css`
        ${tw`text-red-800`};
      `;
    }
  }};
`;

const tableStyles = css`
  ${tw`w-full text-sm`}

  caption {
    ${tw`py-2 bg-slate-700 text-white text-lg font-bold`}
  }

  thead {
    ${tw`border-b border-slate-400 border-l border-l-slate-200 text-center`}

    tr {
      ${tw`shadow bg-slate-100 border-b border-b-slate-400 text-xs`}
    }

    tr:first-child th {
      ${tw`bg-slate-300`}
    }
  }

  tbody {
    ${tw`border-l border-l-slate-200`}

    tr {
      ${tw`even:bg-slate-50 odd:bg-white cursor-pointer`}
      ${tw`hover:(bg-sky-100)`}
    }
  }

  th {
    ${tw`p-1 text-center text-xxs leading-tight`}
  }

  td {
    ${tw`p-1 border-b border-r border-b-slate-200 border-r-slate-200`}
    ${tw`font-mono text-xs text-right`}
  }

  input {
    ${tw`w-1/3 px-0 bg-green-50 border-green-200 text-center text-sm focus:(border-slate-800)`}
  }
`;

const tdStyles = css`
  ${tw`!border-r !border-r-slate-400`}
`;

type Props = {
  data: any;
  onClick: (e) => void;
};

const FoodSourceTable: FC<Props> = ({ data, onClick }) => {
  return (
    <table css={tableStyles}>
      <caption>Click a row to add an item to the Ingredients List</caption>
      <thead>
        <tr>
          <th colSpan={8}></th>
          <th colSpan={4} css={tdStyles}>
            Weight of Nutrients
          </th>
          <th colSpan={3} css={tdStyles}>
            Caloric Basis Calculation
          </th>
          <th colSpan={4} css={tdStyles}>
            Percentage of Calories
          </th>
          <th colSpan={3} css={tdStyles}>
            Dry Matter Calculation
          </th>
          <th colSpan={2}>As Fed (what you hand to the animal)</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th className="border-l border-l-slate-400"></th>
          <th></th>
          <th></th>
          <th css={tdStyles}></th>
          <th css={tdStyles}></th>
          <th></th>
          <th></th>
          <th></th>
          <th css={tdStyles}></th>
          <th>&nbsp;</th>
          <th
            className="border-l border-l-slate-400"
            colSpan={2}
            css={tdStyles}
          >
            Calories in 100g
          </th>
          <th colSpan={2}>
            Nutrient (grams) *<br />
            Atwater = kcal
          </th>
          <th colSpan={2} css={tdStyles}>
            kcal / total calories =<br />% of Total Calories
          </th>
          <th></th>
          <th colSpan={2} className="border-r border-l border-slate-400">
            Dry matter weight (%) of nutrients: % Nutrient (g) / Dry Matter *
            100 = % Nutrient on Dry Matter Basis
          </th>
          <th colSpan={2}>% Dry Matter (DM) * % Nutrient = % As Fed</th>
        </tr>
        <tr>
          <th>
            NDB
            <br />
            No
          </th>
          <th>Desc</th>
          <th>Type</th>
          <th className="border-l border-l-slate-400">MM %</th>
          <th>Bone %</th>
          <th>Liver %</th>
          <th css={tdStyles}>Organ %</th>
          <th css={tdStyles}>Refuse %</th>
          <th>
            Energy
            <br />
            (kcal)
          </th>
          <th>Protein (g)</th>
          <th>Fat (g)</th>
          <th css={tdStyles}>Water (g)</th>
          <th>
            Energy
            <br />
            1000kcal / kcal in 100 grams = grams in 1000 kcal
          </th>
          <th className="border-l border-l-slate-400">
            Protein
            <br />
            g/1000kcal
          </th>
          <th css={tdStyles}>
            Fat
            <br />
            g/1000kcal (Target: 49g/1000kcal)
          </th>
          <th>Protein Atwater (4 kcal/g)</th>
          <th>Fat Atwater (9 kcal/g)</th>
          <th>Calories from Protein (Target: 49%)</th>
          <th css={tdStyles}>Calories from Fat (Target: 44%)</th>
          <th css={tdStyles}>
            Dry Matter:
            <br />
            100 - (MOISTURE in grams) = % DRY MATTER
          </th>
          <th>Protein Dry Matter:</th>
          <th css={tdStyles}>Fat Dry Matter: (Target: 20%)</th>
          <th>% Protein As Fed: (Target: 20%)</th>
          <th>% Fat As Fed: (Target: 10%)</th>
        </tr>
      </thead>
      <tbody>
        {data?.foodSources?.edges.map(({ node }, i) => {
          const fsCaloricBasis = caloricBasis(node.energyKcal);
          const proteinNutrientCalories = nutrientCalories(
            node.proteinG,
            atwaterFactor.proteinKcalPerG
          );
          const fatNutrientCalories = nutrientCalories(
            node.lipidTotG,
            atwaterFactor.fatKcalPerG
          );
          const dryMatter = percentDryMatter(node.waterG);
          const dryMatterProtein = percentNutrientDM(node.proteinG, dryMatter);
          const dryMatterFat = percentNutrientDM(node.lipidTotG, dryMatter);
          const asFedProtein = asFed(dryMatterProtein, dryMatter);
          const asFedFat = asFed(dryMatterFat, dryMatter);

          return (
            <tr key={i} id={node.id} onClick={onClick}>
              <td>{node.ndbno}</td>
              <td className="!text-left" title={node.shrtdesc}>
                {node.shrtdesc.substring(0, 55)}
              </td>
              <td className="!border-r !border-r-slate-400 !text-center">
                {node.type}
              </td>
              <td>{roundAccurately(node.mmPct, 2)}</td>
              <td>{roundAccurately(node.bonePct, 2)}</td>
              <td>{roundAccurately(node.liverPct, 2)}</td>
              <td css={tdStyles}>{roundAccurately(node.organPct, 2)}</td>
              <td css={tdStyles}>{roundAccurately(node.refusePct, 2)}</td>
              <td>{roundAccurately(node.energyKcal, 2)}</td>
              <td>{roundAccurately(node.proteinG, 2)}</td>
              <td>{roundAccurately(node.lipidTotG, 2)}</td>
              <td css={tdStyles}>{roundAccurately(node.waterG, 2)}</td>
              <td className="!border-r !border-r-slate-400">
                {fsCaloricBasis}
              </td>
              <td>{caloriesByNutrient(node.energyKcal, node.proteinG)}</td>
              <td css={tdStyles}>
                {caloriesByNutrient(node.energyKcal, node.lipidTotG)}
              </td>
              <td>{proteinNutrientCalories}</td>
              <td>{fatNutrientCalories}</td>
              <td>
                {((proteinNutrientCalories / node.energyKcal) * 100).toFixed(2)}
              </td>
              <td css={tdStyles}>
                {roundAccurately(
                  (fatNutrientCalories / node.energyKcal) * 100,
                  2
                )}
              </td>
              <td css={tdStyles}>{dryMatter}</td>
              <td>{dryMatterProtein}</td>
              <td css={tdStyles}>{dryMatterFat}</td>
              <StyledProteinTd value={asFedProtein}>
                {asFedProtein}
              </StyledProteinTd>
              <StyledFatTd value={asFedFat}>{asFedFat}</StyledFatTd>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FoodSourceTable;
