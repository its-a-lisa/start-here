// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: c8HQ4QDrdFixJwisZHdvQZ
// Component: mWZvhL92Ok8N

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Logo from "../../Logo"; // plasmic-import: eqWxOKkmGwmo/component
import Button from "../../Button"; // plasmic-import: KaXI-_rb8Hbz/component
import Select from "../../Select"; // plasmic-import: U7q-WXpwL8pf/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_start_here.module.css"; // plasmic-import: c8HQ4QDrdFixJwisZHdvQZ/projectcss
import sty from "./PlasmicNav.module.css"; // plasmic-import: mWZvhL92Ok8N/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Rjr6r3-9QxlW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: qWMN0DGk7j4M/icon

createPlasmicElementProxy;

export type PlasmicNav__VariantMembers = {
  userState: "repeatUser" | "signedIn";
};
export type PlasmicNav__VariantsArgs = {
  userState?: SingleChoiceArg<"repeatUser" | "signedIn">;
};
type VariantPropType = keyof PlasmicNav__VariantsArgs;
export const PlasmicNav__VariantProps = new Array<VariantPropType>("userState");

export type PlasmicNav__ArgsType = {
  brandLogo?: React.ReactNode;
  signUpButton2?: React.ReactNode;
  signInButton2?: React.ReactNode;
  logOutButton2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicNav__ArgsType;
export const PlasmicNav__ArgProps = new Array<ArgPropType>(
  "brandLogo",
  "signUpButton2",
  "signInButton2",
  "logOutButton2"
);

export type PlasmicNav__OverridesType = {
  root?: p.Flex<"div">;
  navigationLinks?: p.Flex<"div">;
  home?: p.Flex<typeof Button>;
  resources?: p.Flex<typeof Select>;
};

export interface DefaultNavProps {
  brandLogo?: React.ReactNode;
  signUpButton2?: React.ReactNode;
  signInButton2?: React.ReactNode;
  logOutButton2?: React.ReactNode;
  userState?: SingleChoiceArg<"repeatUser" | "signedIn">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNav__RenderFunc(props: {
  variants: PlasmicNav__VariantsArgs;
  args: PlasmicNav__ArgsType;
  overrides: PlasmicNav__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "resources.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "userState",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.userState
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootuserState_repeatUser]: hasVariant(
            $state,
            "userState",
            "repeatUser"
          ),
          [sty.rootuserState_signedIn]: hasVariant(
            $state,
            "userState",
            "signedIn"
          )
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <Logo className={classNames("__wab_instance", sty.logo__i3Z2)} />
        ),

        value: args.brandLogo
      })}
      <div className={classNames(projectcss.all, sty.freeBox__sJvFu)}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"navigationLinks"}
          data-plasmic-override={overrides.navigationLinks}
          hasGap={true}
          className={classNames(projectcss.all, sty.navigationLinks)}
        >
          <Button
            data-plasmic-name={"home"}
            data-plasmic-override={overrides.home}
            className={classNames("__wab_instance", sty.home)}
            color={"clear"}
            link={`/`}
          >
            {"Home"}
          </Button>
          <Select
            data-plasmic-name={"resources"}
            data-plasmic-override={overrides.resources}
            className={classNames("__wab_instance", sty.resources)}
            onChange={async (...eventArgs: any) => {
              ((...eventArgs) => {
                p.generateStateOnChangeProp($state, ["resources", "value"])(
                  eventArgs[0]
                );
              }).apply(null, eventArgs);
              (async value => {
                const $steps = {};

                $steps["goToHoldingSpace"] =
                  $state.resources.value == "holding"
                    ? (() => {
                        const actionArgs = { destination: `/holiding-space` };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                if (
                  $steps["goToHoldingSpace"] != null &&
                  typeof $steps["goToHoldingSpace"] === "object" &&
                  typeof $steps["goToHoldingSpace"].then === "function"
                ) {
                  $steps["goToHoldingSpace"] = await $steps["goToHoldingSpace"];
                }

                $steps["goToProtectedPage"] =
                  $state.resources.value == "protected"
                    ? (() => {
                        const actionArgs = { destination: `/protected-page` };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                if (
                  $steps["goToProtectedPage"] != null &&
                  typeof $steps["goToProtectedPage"] === "object" &&
                  typeof $steps["goToProtectedPage"].then === "function"
                ) {
                  $steps["goToProtectedPage"] = await $steps[
                    "goToProtectedPage"
                  ];
                }
              }).apply(null, eventArgs);
            }}
            options={(() => {
              const __composite = [
                { value: null, label: null },
                { value: null, label: null }
              ];
              __composite["0"]["value"] = "holding";
              __composite["0"]["label"] = "Holding Page";
              __composite["1"]["value"] = "protected";
              __composite["1"]["label"] = "Protected";
              return __composite;
            })()}
            placeholder={"Resources"}
            value={p.generateStateValueProp($state, ["resources", "value"])}
          />
        </p.Stack>
        <div className={classNames(projectcss.all, sty.freeBox__uc6Qp)}>
          {(
            hasVariant($state, "userState", "signedIn")
              ? false
              : hasVariant($state, "userState", "repeatUser")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Button
                    className={classNames("__wab_instance", sty.button__fpBfi)}
                    link={`/signup`}
                  >
                    {"Sign Up"}
                  </Button>
                ),
                value: args.signUpButton2
              })
            : null}
          {(hasVariant($state, "userState", "repeatUser") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Button
                    className={classNames("__wab_instance", sty.button__u9SpI)}
                    link={`/login`}
                  >
                    {"Sign In"}
                  </Button>
                ),
                value: args.signInButton2
              })
            : null}
          {(hasVariant($state, "userState", "signedIn") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Button
                    className={classNames("__wab_instance", sty.button__fHwgh)}
                    link={`/`}
                  >
                    {"Log Out"}
                  </Button>
                ),
                value: args.logOutButton2
              })
            : null}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navigationLinks", "home", "resources"],
  navigationLinks: ["navigationLinks", "home", "resources"],
  home: ["home"],
  resources: ["resources"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationLinks: "div";
  home: typeof Button;
  resources: typeof Select;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNav__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNav__VariantsArgs;
    args?: PlasmicNav__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNav__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNav__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNav__ArgProps,
          internalVariantPropNames: PlasmicNav__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNav__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNav";
  } else {
    func.displayName = `PlasmicNav.${nodeName}`;
  }
  return func;
}

export const PlasmicNav = Object.assign(
  // Top-level PlasmicNav renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationLinks: makeNodeComponent("navigationLinks"),
    home: makeNodeComponent("home"),
    resources: makeNodeComponent("resources"),

    // Metadata about props expected for PlasmicNav
    internalVariantProps: PlasmicNav__VariantProps,
    internalArgProps: PlasmicNav__ArgProps
  }
);

export default PlasmicNav;
/* prettier-ignore-end */
