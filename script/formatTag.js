export default function formatTag(tag) {
  if (tag === "c" || tag === "C") {
    return {
      tag: "c",
      label: "C",
    };
  }
  if (tag === "c++" || tag === "C++" || tag === "cpp" || tag === "CPP") {
    return {
      tag: "cpp",
      label: "C++",
    };
  }
  if (tag === "cs" || tag === "c#" || tag === "CS" || tag === "C#") {
    return {
      tag: "cs",
      label: "C#",
    };
  }
  if (tag === "java" || tag === "Java" || tag === "JAVA") {
    return {
      tag: "java",
      label: "Java",
    };
  }
  if (
    tag === "py" ||
    tag === "Py" ||
    tag === "PY" ||
    tag === "python" ||
    tag === "Python" ||
    tag === "PYTHON"
  ) {
    return {
      tag: "python",
      label: "Python",
    };
  }
  if (tag === "GO" || tag === "go" || tag === "golang" || tag === "Go") {
    return {
      tag: "go",
      label: "GO",
    };
  }
  if (
    tag === "js" ||
    tag === "JS" ||
    tag === "Js" ||
    tag === "javascript" ||
    tag === "JavaScript" ||
    tag === "JAVASCRIPT"
  ) {
    return {
      tag: "js",
      label: "JS",
    };
  }
  if (tag === "php" || tag === "PHP" || tag === "Php") {
    return {
      tag: "php",
      label: "PHP",
    };
  }
  if (tag === "julia" || tag === "Julia" || tag === "JULIA") {
    return {
      tag: "julia",
      label: "Julia",
    };
  }
  return {
    tag: tag,
    label: tag,
  };
}
