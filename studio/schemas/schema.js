// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import category from "./documents/category";
import person from "./documents/person";
import blog from "./documents/blog";
import siteSettings from "./documents/siteSettings";
import page from "./documents/page";
import categories from "./documents/categories";
import menu from "./documents/menu";
// Object types
import bioPortableText from "./objects/bioPortableText";
import figure from "./objects/figure";
import projectMember from "./objects/projectMember";
import blogPortableText from "./objects/blogPortableText";
import simplePortableText from "./objects/simplePortableText";
import youtube from "./objects/youtube";
import line from "./objects/line";
import tweet from "./objects/tweet";
import instagram from "./objects/instagram";
import submenu from "./objects/subMenu";
import secondarysubmenu from "./objects/secondarySubMenu";
import titleslug from "./objects/titleslug";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "Website",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    projectMember,
    blogPortableText,
    simplePortableText,
    youtube,
    line,
    tweet,
    instagram,
    submenu,
    titleslug,
    secondarysubmenu,
    // The following are document types which will appear
    // in the studio.
    category,
    person,
    blog,
    siteSettings,
    page,
    categories,
    menu
  ])
});
