// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: c8HQ4QDrdFixJwisZHdvQZ
// Component: I77fzhsyDgqz

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
import DefaultLayout from "../../DefaultLayout"; // plasmic-import: A2d7WnFA90Fs/component
import Auth from "../../Auth"; // plasmic-import: xA16lXqVu7N9/component
import Nav from "../../Nav"; // plasmic-import: mWZvhL92Ok8N/component
import Logo from "../../Logo"; // plasmic-import: eqWxOKkmGwmo/component
import Button from "../../Button"; // plasmic-import: KaXI-_rb8Hbz/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_start_here.module.css"; // plasmic-import: c8HQ4QDrdFixJwisZHdvQZ/projectcss
import sty from "./PlasmicSignUp.module.css"; // plasmic-import: I77fzhsyDgqz/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Rjr6r3-9QxlW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: qWMN0DGk7j4M/icon

createPlasmicElementProxy;

export type PlasmicSignUp__VariantMembers = {};
export type PlasmicSignUp__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignUp__VariantsArgs;
export const PlasmicSignUp__VariantProps = new Array<VariantPropType>();

export type PlasmicSignUp__ArgsType = {};
type ArgPropType = keyof PlasmicSignUp__ArgsType;
export const PlasmicSignUp__ArgProps = new Array<ArgPropType>();

export type PlasmicSignUp__OverridesType = {
  root?: p.Flex<typeof DefaultLayout>;
  h1?: p.Flex<"h1">;
  auth?: p.Flex<typeof Auth>;
};

export interface DefaultSignUpProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSignUp__RenderFunc(props: {
  variants: PlasmicSignUp__VariantsArgs;
  args: PlasmicSignUp__ArgsType;
  overrides: PlasmicSignUp__OverridesType;
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

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <DefaultLayout
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames("__wab_instance", sty.root)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__wvEjk)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__iecnr)}
            >
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"Sign Up"}
              </h1>
              <Auth
                data-plasmic-name={"auth"}
                data-plasmic-override={overrides.auth}
                className={classNames("__wab_instance", sty.auth)}
                isSignUp={true}
              />
            </p.Stack>
          </div>
        </DefaultLayout>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "auth"],
  h1: ["h1"],
  auth: ["auth"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof DefaultLayout;
  h1: "h1";
  auth: typeof Auth;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignUp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignUp__VariantsArgs;
    args?: PlasmicSignUp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignUp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignUp__ArgsType,
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
          internalArgPropNames: PlasmicSignUp__ArgProps,
          internalVariantPropNames: PlasmicSignUp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignUp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUp";
  } else {
    func.displayName = `PlasmicSignUp.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUp = Object.assign(
  // Top-level PlasmicSignUp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    auth: makeNodeComponent("auth"),

    // Metadata about props expected for PlasmicSignUp
    internalVariantProps: PlasmicSignUp__VariantProps,
    internalArgProps: PlasmicSignUp__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSignUp;
/* prettier-ignore-end */
