# List of problem IDs to keep
problem_ids_to_keep=(
    'aca1a7dtangentline2'
    'a394625deriv6'
    'aca1a7dderivativetangent3'
    'a394625deriv4'
    'a1cc0dcareas1'
    'a1cc0dcareas6'
    'aca1a7dtangentline7'
    'aca1a7dderivative6'
    'a2d77b8chainrule1'
    'a1cc0dcareas4'
    'a2d77b8chainrule8'
    'a394625deriv24'
    'a1cc0dcareas3'
    'aca1a7dderivative4'
    'aca1a7dderivativetangent2'
    'a394625deriv7'
    'aca1a7dderivative12'
    'a394625deriv23'
    'aca1a7dderivative11'
    'aca1a7dderivative8'
    'a2d77b8chainrule2'
    'a2d77b8chainrule12'
    'a2d77b8chainrule14'
    'a1cc0dcareas11'
    'a2d77b8chainrule6'
    'a394625deriv13'
    'aca1a7dderivative3'
    'a394625deriv25'
    'aca1a7dderivative9'
    'aca1a7dderivative10'
    'a394625deriv11'
    'a1cc0dcareas10'
    'a2d77b8chainrule11'
    'aca1a7dderivative2'
    'a394625deriv21'
    'aca1a7dtangentline8'
    'aca1a7dtangentline5'
    'aca1a7dtangentline3'
    'aca1a7dtangentline6'
    'aca1a7dvelocity1'
    'aca1a7dderivative7'
    'aca1a7dderivative1'
    'a2d77b8chainrule3'
    'aca1a7dtangentline4'
    'aca1a7dtangentline1'
    'a394625deriv15'
    'a2d77b8chainrule4'
    'aca1a7dderivativetangent1'
    'a394625deriv20'
    'aca1a7dderivative5'
    'a2d77b8chainrule7'
    'aca1a7dderivativetangent4'
)

# Function to check if an item is in an array
function contains() {
    local item="$1"
    for id in "${problem_ids_to_keep[@]}"; do
        if [[ "$id" == "$item" ]]; then
            return 0
        fi
    done
    return 1
}

# Loop through all directories in content-pool
for dir in */ ; do
    dir=${dir%/}  # Remove trailing slash
    dir=$(basename "$dir")  # Extract the directory name without slashes
    if ! contains "$dir"; then
        echo "Removing ${dir}"
        rm -rf "$dir"
    fi
done
